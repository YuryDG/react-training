import React, { useContext, useEffect, useState } from "react";

// check the api on firebase, for this functions
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    User,
    onAuthStateChanged,
} from "firebase/auth";

import { Message } from '../types';

// type for the value of the context
type AuthContextProps = {
    currentUser: User | null;
    signUp: (email: string, password: string) => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    resetPassword: (email: string) => Promise<void>;
    message: Message,
    isLoading: boolean;
}

// default value for the context
const authContextDefaultValue: AuthContextProps = {
    currentUser: null,
    signUp: async (_: string, __: string) => { },
    login: async (_: string, __: string) => { },
    logout: async () => { },
    resetPassword: async (_: string) => { },
    message: {
        title: 'AuthProvider Settings',
        info: 'AuthProvider was not found on the app subtree',
        type: 'error'
    },
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

    // control first loading
    /**
     * By default when app reload, we need to wait for firebase to get the user data
     * when user is already logged in. 
     * if firebase is loading the user we can said that our app is loading, 
     * in this case, we won't render the children until firebase retrieve the info of the 
     * current user
     */
    const [isFetchingUser, setIsFetchingUser] = useState(true);

    // state variable to store the current user
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    // state variable to store the current user
    const [isLoading, setIsLoading] = useState(false);

    // app message
    const [message, setMessage] = useState<Message>({
        title: '',
        info: '',
        type: 'info'
    });

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
            setIsFetchingUser(false);
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
            setIsLoading(true);
            setMessage({ title: '', info: '', type: 'error' });
            await createUserWithEmailAndPassword(getAuth(), email, password);
            setMessage({ title: 'Sign up', info: 'Welcome to the system', type: 'info' });
            setIsLoading(false);
        } catch (error) {
            setMessage({
                title: 'Sign up',
                info: (error as Error).message || 'Something when wrong when sign up',
                type: 'error'
            });
            setIsLoading(false);
        }
    }

    const login = async (email: string, password: string) => {
        try {
            setMessage({ title: '', info: '', type: 'error' });
            setIsLoading(true);
            await signInWithEmailAndPassword(getAuth(), email, password);
            setMessage({
                title: 'Login',
                info: 'Welcome back ' + email,
                type: 'info'
            });
            setIsLoading(false);
        } catch (error) {
            setMessage({
                title: 'Login',
                info: (error as Error).message || 'Something when wrong when sign in',
                type: 'error'
            });
            setIsLoading(false);
        }
    }

    const logout = async () => {
        try {
            setMessage({ title: '', info: '', type: 'error' });
            setIsLoading(true);
            await signOut(getAuth());
            setIsLoading(false);
        } catch (error) {
            setMessage({
                title: 'Logout',
                info: (error as Error).message || 'Something when wrong when logout',
                type: 'error'
            });
            setIsLoading(false);
        }
    }

    const resetPassword = async (email: string) => {
        try {
            setMessage({ title: '', info: '', type: 'error' });
            setIsLoading(true);
            await sendPasswordResetEmail(getAuth(), email);
            setMessage({
                title: 'Reset Password',
                info: 'Check your email for further instructions',
                type: 'info'
            });
            setIsLoading(false);
        } catch (error) {
            setMessage({
                title: 'Reset Password',
                info: (error as Error).message || 'Something when wrong when reset password',
                type: 'error'
            });
            setIsLoading(false);
        }
    }

    // value for the context
    const value = {
        currentUser,
        signUp,
        login,
        logout,
        resetPassword,
        isLoading,
        message
    }

    return (
        <AuthContext.Provider value={value}>
            {!isFetchingUser && children}
        </AuthContext.Provider>
        /**
        * Pay attention to the line  {!isFetchingUser && children}
        * We will render the app only when firebase fetch the info for the current user
        * 
        * By default when app reload, we need to wait for firebase to get the user data
        * when user is already logged in. 
        * if firebase is loading the user we can said that our app is loading, 
        * in this case, we won't render the children until firebase retrieve the info of the 
        * current user
       */
    )
}