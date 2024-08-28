import { getAuth, onAuthStateChanged, User } from "firebase/auth";

export const getUser = (): Promise<User | null> => {
    return new Promise((resolve, reject) => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                resolve(user);
            } else {
                resolve(null);
            }
        });
    });
};