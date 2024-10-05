"use client"

import Link from 'next/link'
import { useState } from 'react';
import { EyeNoneIcon, EyeOpenIcon } from '@radix-ui/react-icons';

export default function Home() {

    // Dados
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [altura, setAltura] = useState<string>('');
    const [peso, setPeso] = useState<string>('');
    const [atividade, setAtividade] = useState<string>('');
    const [sexo, setSexo] = useState<string>('');

    // Muda o estado da senha
    const [viewPassword, setViewPassword] = useState<boolean>(false)

    const handleAtividade = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAtividade(e.target.value)
    }
    
    const handleSexo = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSexo(e.target.value)
    }

    // Funcão para ver senha
    const tugglePassword = () => {
        setViewPassword(!viewPassword)
    }

    // REQUISIÇãO AQUI
    const handleCreateAccount = (e: React.FormEvent) => {

        e.preventDefault();

    }

    return (
    <div className="w-screen h-screen bg-neutral-100 flex flex-col items-center justify-center gap-10">

        <h1 className='text-3xl font-bold'>Cadastro</h1>

        <div className='flex items-center gap-10'>

            <div className="w-96 flex flex-col justify-between gap-4">

                <form onSubmit={handleCreateAccount} className='flex flex-col items-center gap-4'>
                    <div className='w-full px-2 bg-neutral-700 border-b-4 border-blue-300 flex justify-between items-center'>
                        <input 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text" 
                            className='flex-1 py-2 bg-transparent outline-none text-neutral-100'  
                            placeholder='Nome'
                        />
                    </div>

                    <div className='w-full px-2 bg-neutral-700 border-b-4 border-blue-300 flex justify-between items-center'>
                        <input 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email" 
                            className='flex-1 py-2 bg-transparent outline-none text-neutral-100'  
                            placeholder='Email'
                        />
                    </div>
                    
                    <div className='w-full px-2 bg-neutral-700 border-b-4 border-blue-300 flex justify-between items-center'>
                        
                        <input 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type={viewPassword ? 'text' : 'password'} 
                            className='flex-1 py-2 bg-transparent outline-none text-neutral-100'  
                            placeholder='Password'
                        />
                        
                        {viewPassword  &&
                            <button onClick={tugglePassword} className='p-2'>
                                <EyeNoneIcon  className='text-neutral-100 size-4'/>
                            </button>
                        }
                        
                        {!viewPassword &&
                            <button onClick={tugglePassword} className='p-2'>
                                <EyeOpenIcon  className='text-neutral-100 size-4'/>
                            </button>
                        }  
                        
                    </div>

                    <div className='grid grid-cols-2 gap-2'>

                        <div className='flex-1 px-2 bg-neutral-700 border-b-4 border-blue-300 flex justify-between items-center'>
                            <input 
                                value={altura}
                                onChange={(e) => setAltura(e.target.value)}
                                type="number" 
                                className='flex-1 py-2 bg-transparent outline-none text-neutral-100 typeNumber'  
                                placeholder='Altura (em cm)'
                            />
                        </div>

                        <div className='flex-1 px-2 bg-neutral-700 border-b-4 border-blue-300 flex justify-between items-center'>
                            <input 
                                value={peso}
                                onChange={(e) => setPeso(e.target.value)}
                                type="number" 
                                className='flex-1 py-2 bg-transparent outline-none text-neutral-100 typeNumber'  
                                placeholder='Peso (em kg)'
                            />
                        </div>

                    </div>
                    
                    <div className='w-full p-2 bg-neutral-700 border-b-4 border-blue-300 text-neutral-400 flex flex-col gap-2'>
                        
                        <p className='text-center'>Nível de atividade</p>

                        <div className='px-5 grid grid-cols-2 justify-between'>
                            
                            <label>
                                <input 
                                type="radio" 
                                value="muito ativo" 
                                checked={atividade === 'muito ativo'} 
                                onChange={handleAtividade} 
                                />
                                muito ativo
                            </label>
                            
                            <label>
                                <input 
                                type="radio" 
                                value="ativo" 
                                checked={atividade === 'ativo'} 
                                onChange={handleAtividade} 
                                />
                                ativo
                            </label>

                            <label>
                                <input 
                                type="radio" 
                                value="levemente ativo" 
                                checked={atividade === 'levemente ativo'} 
                                onChange={handleAtividade} 
                                />
                                levemente ativo
                            </label>

                            <label>
                                <input 
                                type="radio" 
                                value="sedentario" 
                                checked={atividade === 'sedentario'} 
                                onChange={handleAtividade} 
                                />
                                sedentário
                            </label>
                        
                        </div>
                    
                    </div>

                    <div className='w-full p-2 bg-neutral-700 border-b-4 border-blue-300 text-neutral-400 flex flex-col gap-2'>
                        
                        <p className='text-center'>Sexo</p>

                        <div className='px-5 grid grid-cols-2 justify-between'>
                            
                            <label>
                                <input 
                                type="radio" 
                                value="masculino" 
                                checked={sexo === 'masculino'} 
                                onChange={handleSexo} 
                                />
                                masculino
                            </label>
                            
                            <label>
                                <input 
                                type="radio" 
                                value="femenino" 
                                checked={sexo === 'femenino'} 
                                onChange={handleSexo} 
                                />
                                femenino
                            </label>
                        
                        </div>
                    
                    </div>
                    
                    <button 
                        type='submit'
                        className='w-3/4 py-2 rounded-lg text-neutral-100 font-bold bg-blue-900'
                    >Criar conta</button>
                </form>

                <div className='w-full h-0.5 bg-neutral-700'/>

                <p className='text-center'>Já possui uma conta? 
                    <Link className='underline ml-1' href={'/signin'}>Entre agora mesmo!</Link>
                </p>
            </div>

        </div>
    </div>
)}