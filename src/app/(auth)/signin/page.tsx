"use client"

import Link from 'next/link'

import { EyeNoneIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

export default function Home() {

    // Dados 
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    // Muda o estado da senha
    const [viewPassword, setViewPassword] = useState<boolean>(false)

    // Funcão para ver senha
    const tugglePassword = () => {
        setViewPassword(!viewPassword)
    }

    // RQUISIÇÃO AQUI
    const handleLoginAccount = () => {

        // ... REQUISIÇÃO COM AXIOS - POST

        setEmail('')
        setPassword('')
    }

    return (
    <div className="w-screen h-screen bg-neutral-100 flex flex-col items-center justify-center gap-10">

        <h1 className='text-3xl font-bold'>Login</h1>

        <div className="flex items-center gap-10">

            {/* Imagem */}
            <div className="w-96 h-96 bg-neutral-300"></div> 

            {/* Form */}
            <div className="h-80 w-96 py-10 flex flex-col justify-between items-center gap-4">

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
                    onClick={handleLoginAccount}
                    className='w-3/4 py-2 rounded-lg text-neutral-100 font-bold bg-blue-900'
                >Entrar</button>

                <div className='w-full h-0.5 bg-neutral-700'></div>
                <p>Não possui uma conta? <Link className='underline' href={'/signup'}>Crie uma agora mesmo!</Link></p>
            </div>
        </div>
    </div>
)}