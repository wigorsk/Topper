"use client"

import { api } from "@/app/utils/api";
import { useRouter } from "next/navigation";
import { createContext, ReactNode, useState } from "react";

type UserContextProps = { 
    login: (email: string, password: string) => void;
    logout: () => void;
    message: string | null;
    setHasError: (boolean: boolean) => void;
    hasError: boolean | null;
}
export const AuthContext = createContext<UserContextProps>({} as UserContextProps);

type Props = { children: ReactNode }
const AuthProvider = ({ children }:Props) => {

    const [message, setMessage] = useState<string | null>(null)
    const [hasError, setHasError] = useState<boolean | null>(false)

    const router = useRouter();
    const login = async (email: string, password: string) => {

        if (email === '' || email === null) { setHasError(false) }

        try {
            const response = await api.post('/login/', {
                email,
                password,
            });
            setMessage(response.data.message)
            
            if (response.data.status) {
                localStorage.setItem('user', JSON.stringify(response.data.data));
                router.push('/');
            } else {
            }
        } 
        catch (error) {
            setHasError(true)
            console.error('Erro na requisição:', error);
        }
        
    }

    const logout = () => {
        localStorage.removeItem('user');
        window.location.href = '/signin';
    }

    return (
        <AuthContext.Provider value={{
            login,
            logout,
            setHasError,
            hasError,
            message
         }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;