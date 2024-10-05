"use client"

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { EyeNoneIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

import { api } from '../../utils/api';

export default function Home() {

    // Dados 
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const router = useRouter();
    
    // Ver ou Ocultar Senha
    const [viewPassword, setViewPassword] = useState<boolean>(false)

    const tugglePassword = () => {
        setViewPassword(!viewPassword)
    }

    // RQUISIÇÃO AQUI
    const handleLoginAccount = async (e: React.FormEvent) => {

        e.preventDefault();

        try {

            const response = await api.post('/login/', {
                email,
                password,
            });

            if (response.data.status) {
                localStorage.setItem('user', JSON.stringify(response.data.data));
                
                router.push('/');

            } else {
                setError('Login falhou. Verifique suas credenciais');
            }

        } catch (error) {
           console.error('Erro na requisição:', error);
           setError('Ocorreu um erro. Tente novamente mais tarde.');
        }
        
    }

    return (
    <div className="w-screen h-screen bg-neutral-100 flex flex-col items-center justify-center gap-10">

        <h1 className='text-3xl font-bold'>Login</h1>

        <div className="flex items-center gap-10">

            {/* Imagem */}
            <div className="w-96 h-96 bg-neutral-300"></div> 

            {/* Form */}
            <div className="h-80 w-96 py-10 flex flex-col gap-4">

                <form onSubmit={handleLoginAccount} className="flex flex-col items-center gap-4">

                    {/* Email */}
                    <div className='w-full px-2 bg-neutral-700 border-b-4 border-red-300 flex justify-between items-center'>
                    <input 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email" 
                            className='flex-1 py-2 bg-transparent outline-none text-neutral-100'  
                            placeholder='Email'
                        />
                    </div>

                    {/* Senha */}
                    <div className='w-full px-2 bg-neutral-700 border-b-4 border-red-300 flex justify-between items-center'>
                        <input 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type={viewPassword ? 'text' : 'password'} 
                            className='flex-1 py-2 bg-transparent outline-none text-neutral-100'  
                            placeholder='Password'
                        />
                        
                            {viewPassword  &&
                                <button onClick={tugglePassword} className='p-2'><EyeNoneIcon  className='text-neutral-100 size-4'/></button>
                            }
                            
                            {!viewPassword &&
                                <button onClick={tugglePassword} className='p-2'><EyeOpenIcon  className='text-neutral-100 size-4'/></button>
                            }
                            
                        
                    </div>

                    {/* Botão de Login */}
                    <button 
                        type='submit'
                        className='w-3/4 py-2 rounded-lg text-neutral-100 font-bold bg-blue-900'
                    >Entrar</button>

                </form>

                {error &&
                 <p>{error}</p>
                }

                <div className='w-full h-0.5 bg-neutral-700' />
                <p className="text-center">Não possui uma conta? <Link className='underline' href={'/signup'}>Crie uma agora mesmo!</Link></p>
            </div>
        </div>
    </div>
)}