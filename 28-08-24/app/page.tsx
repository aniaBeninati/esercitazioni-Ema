'use client';

import { useAuth } from "@/context/AuthContext";
import PerfumeList from "@/components/PerfumeList";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
    const { user } = useAuth();
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user) {
            router.replace("/signin");
        } else {
            setLoading(false); 
        }
    }, [user, router]);

    if (loading) {
        return <div>Loading...</div>; 
    }

    return (
        <main>
            <PerfumeList />
        </main>
    );
}
