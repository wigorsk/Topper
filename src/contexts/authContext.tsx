"use client"

import { api } from "@/app/utils/api";
import { useRouter } from "next/navigation";
import { createContext, ReactNode, useEffect, useState } from "react";



type UserContextProps = { 
    login: (email: string, password: string) => void;
    logout: () => void;
    error: string | null;
}
export const AuthContext = createContext<UserContextProps>({} as UserContextProps);

type Props = { children: ReactNode }
const AuthProvider = ({ children }:Props) => {

    const [error, setError] = useState<string | null>(null);
    
    const router = useRouter();
    const login = async (email: string, password: string) => {

        try {
            const response = await api.post('/login/', {
                email,
                password,
            });

            if (response.data.status) {
                localStorage.setItem('user', JSON.stringify(response.data.data));
                router.push('/');
            } else {
                setError('Email ou senha incorretos!');
            }
            
        } catch (error) {
           console.error('Erro na requisição:', error);
           setError('Ocorreu um erro. Tente novamente mais tarde.');
        }
        
    }

    const logout = () => {
        localStorage.removeItem('user');
    }

    return (
        <AuthContext.Provider value={{
            login,
            logout,
            error
         }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;