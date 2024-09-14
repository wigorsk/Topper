"use client"

import Link from 'next/link'

import { EyeNoneIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

export default function Home() {

    // Dados
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    // Muda o estado da senha
    const [viewPassword, setViewPassword] = useState<boolean>(false)

    // Funcão para ver senha
    const tugglePassword = () => {
        setViewPassword(!viewPassword)
    }

    // REQUISIÇãO AQUI
    const handleCreateAccount = () => {

        // ... REQUISIÇÃO COM AXIOS - POST

        setName('')
        setEmail('')
        setPassword('')
    }

    return (
    <div className="w-screen h-screen bg-neutral-100 flex flex-col items-center justify-center gap-10">

        <h1 className='text-3xl font-bold'>Cadastro</h1>

        <div className='flex items-center gap-10'>

            {/* Imagem */}
            <div className="w-96 h-96 bg-neutral-300"></div>

            {/* Form */}
            <div className="h-80 w-96 py-4 flex flex-col justify-between items-center gap-4">
            
                {/* Nome */}
                <div className='w-full px-2 bg-neutral-700 border-b-4 border-blue-300 flex justify-between items-center'>
                    <input 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text" 
                        className='flex-1 py-2 bg-transparent outline-none text-neutral-100'  
                        placeholder='Nome'
                    />
                </div>

                {/* Email */}
                <div className='w-full px-2 bg-neutral-700 border-b-4 border-blue-300 flex justify-between items-center'>
                    <input 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email" 
                        className='flex-1 py-2 bg-transparent outline-none text-neutral-100'  
                        placeholder='Email'
                    />
                </div>

                {/* Senha */}
                <div className='w-full px-2 bg-neutral-700 border-b-4 border-blue-300 flex justify-between items-center'>
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

                {/* Botão de criar conta */}
                <button 
                    onClick={handleCreateAccount}
                    className='w-3/4 py-2 rounded-lg text-neutral-100 font-bold bg-blue-900'
                >Criar conta</button>

                <div className='w-full h-0.5 bg-neutral-700'></div>
                <p>Já possui uma conta? <Link className='underline' href={'/signin'}>Entre agora mesmo!</Link></p>
            </div>

        </div>
</div>
)}