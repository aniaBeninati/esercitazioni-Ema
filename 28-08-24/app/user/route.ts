import { GetServerSideProps } from "next";
import UserPage from "@/app/user/page"; 
import { User } from "firebase/auth";
import { getUser } from "@/actions/get-user"; 

interface UserPageProps {
    user: User | null;
    error?: string; 
}

const UserPageWrapper = ({ user, error }: UserPageProps) => {
    if (error) {
        return <div className="error">{error}</div>; 
    }
    
    return <UserPage user={user} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    try {
        const user = await getUser(); 
        if (!user) {
            return {
                redirect: {
                    destination: "/signin",
                    permanent: false,
                },
            };
        }
        return {
            props: {
                user,
            },
        };
    } catch (error) {
        return {
            props: {
                user: null,
                error: 'An error occurred while fetching user data.',
            },
        };
    }
};

export default UserPageWrapper;
