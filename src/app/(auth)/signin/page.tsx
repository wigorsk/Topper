"use client"

import Link from 'next/link';

import { EyeNoneIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import { useContext, useState } from 'react';

import { AuthContext } from '@/contexts/authContext';

export default function Home() {

    const { login, error } = useContext(AuthContext)

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    
    const [viewPassword, setViewPassword] = useState<boolean>(false)

    const tugglePassword = () => {
        setViewPassword(!viewPassword)
    }

    const handleLoginAccount = (e: React.FormEvent) => {

        e.preventDefault();
        login(email, password);
    }

    return (
        <div className="w-screen h-screen bg-neutral-100 flex flex-col items-center justify-center gap-10">

            <h1 className='text-3xl font-bold'>Login</h1>

            <div className="flex items-center gap-10">

                <div className="w-96 h-96 bg-neutral-300"></div> 

                <div className="h-80 w-96 py-10 flex flex-col gap-4">

                    <form onSubmit={handleLoginAccount} className="flex flex-col items-center gap-4">

                        <div className='w-full px-2 bg-neutral-700 border-b-4 border-red-300 flex justify-between items-center'>
                        <input 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email" 
                                className='flex-1 py-2 bg-transparent outline-none text-neutral-100'  
                                placeholder='Email'
                            />
                        </div>

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