import React, { useContext, useEffect, useState } from "react";

// check the api on firebase, for this functions
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    User,
    onAuthStateChanged,
} from "firebase/auth";

// type for the value of the context
type AuthContextProps = {
    currentUser: User | null;
    signUp: (email: string, password: string) => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
    error: string;
    isLoading: boolean;
}

// default value for the context
const authContextDefaultValue: AuthContextProps = {
    currentUser: null,
    signUp: async (_: string, __: string) => undefined,
    login: async (_: string, __: string) => undefined,
    error: 'AuthProvider was not found on the app subtree',
    isLoading: false
}

// context typed properly
const AuthContext = React.createContext(authContextDefaultValue);

// our custom hook to get the context
export const useAuth = () => {
    return useContext(AuthContext);
}

// context provider
export const AuthProvider: React.FC = ({ children }) => {

    // state variable to store the current user
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    // state variable to store the current user
    const [isLoading, setIsLoading] = useState(false);

    // app Error
    const [error, setError] = useState('');

    /**
     * Pay attention to this part
     * Firebase has a mechanism to observe the user when signed in or signed out 
     * https://firebase.google.com/docs/auth/web/start#set_an_authentication_state_observer_and_get_user_data
     * To handle this we can subscribe to the observer using a useEffect because we want to run this when app open, 
     * and unsubscribe when app 
     */
    useEffect(() => {

        const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
            setCurrentUser(user);
            // if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            // } else {
            // User is signed out
            // }
        });

        return () => {
            // we unsubscribe from the observer
            unsubscribe();
        }
    }, []); // no dependency since it will run only once when app  start running

    // function to sing up
    const signUp = async (email: string, password: string) => {
        try {
            setError('');
            setIsLoading(true);

            await createUserWithEmailAndPassword(getAuth(), email, password);
            setIsLoading(false);
        } catch (error) {
            setError((error as Error).message || 'Something when wrong when sign up');
            setIsLoading(false);
        }
    }

    const login = async (email: string, password: string) => {
        try {
            setError('');
            setIsLoading(true);

            const response = await signInWithEmailAndPassword(getAuth(), email, password);
            setIsLoading(false);
            console.log({ response });
        } catch (error) {
            setError((error as Error).message || 'Something when wrong when sign in');
            setIsLoading(false);
        }
    }

    // value for the context
    const value = {
        currentUser,
        signUp,
        login,
        error,
        isLoading
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}