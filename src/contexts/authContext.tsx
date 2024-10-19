"use client"

import { api } from "@/app/utils/api";
import { useRouter } from "next/navigation";
import { createContext, ReactNode } from "react";

type UserContextProps = { 
    login: (email: string, password: string) => void;
    logout: () => void;
}
export const AuthContext = createContext<UserContextProps>({} as UserContextProps);

type Props = { children: ReactNode }
const AuthProvider = ({ children }:Props) => {

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
            } 
        } 
        catch (error) {
           console.error('Erro na requisição:', error);
        }
        
    }

    const logout = () => {
        localStorage.removeItem('user');
    }

    return (
        <AuthContext.Provider value={{
            login,
            logout
         }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;