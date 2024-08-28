'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { addPerfume } from '@/app/api/perfumeClient';
import PerfumeForm from '@/components/PerfumeForm';
import { labels } from '@/data/labels';
import { toast } from 'react-toastify';
import { PerfumeDetail } from '@/app/types/perfume';

export default function Create() {
    const router = useRouter();
    const [isError, setIsError] = useState({
        message: '',
        isError: false,
    });

    const handleCreate = async (body: Omit<PerfumeDetail, 'id'>) => {
        try {
            await addPerfume(body);
            toast.success(`${body.name} aggiunto!`, {
                position: 'top-right',
            });
            router.push('/');
        } catch (error) {
            // Gestione migliorata dell'errore
            const errorMessage = error instanceof Error ? error.message : 'Errore sconosciuto';
            toast.error(errorMessage, {
                position: 'top-right',
            });
            setIsError({
                message: errorMessage,
                isError: true, 
            });
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-indigo-600 text-center">{labels.createPage}</h1>
                <PerfumeForm onSubmit={handleCreate} />
                {isError.isError && (
                    <div className="mt-4 p-4 border-l-4 border-red-500 bg-red-50 text-red-700 rounded">
                        <strong className="font-semibold">Qualcosa è andato storto</strong>
                        <p>{isError.message}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
