'use client';  
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { labels } from '@/data/labels';

export default function NavBar() {
    const { user, signOut } = useAuth();
    const router = useRouter();

    const handleSignOut = async () => {
        await signOut();
        router.push('/signin');
    };

    return (
        <nav className="flex items-center justify-between py-4 px-6 bg-gray-900 text-white">
            <Link href="/">
                <span className="text-xl font-bold">{labels.appName}</span>
            </Link>
            <div className="flex space-x-4">
                {user ? (
                    <>
                        <Link href="/create">Add Perfume</Link>
                        <button onClick={handleSignOut}>Sign Out</button>
                    </>
                ) : (
                    <>
                        <Link href="/signin">Sign In</Link>
                        <Link href="/signup">Sign Up</Link>
                    </>
                )}
            </div>
        </nav>
    );
}