import { User } from "firebase/auth";

interface UserPageProps {
    user: User | null;
}

const UserPage = ({ user }: UserPageProps) => {
    if (!user) {
        return <div>Redirecting...</div>; // Mostra un messaggio di redirect
    }

    return (
        <div>
            <h1>Welcome, {user.email}!</h1>
            {/* Add user page content */}
        </div>
    );
};

export default UserPage;
