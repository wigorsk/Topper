"use client"

import Link from 'next/link'
import { useContext, useState } from 'react';
import { EyeNoneIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import { api } from '@/app/utils/api';

export default function Home() {

    // Dados
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [altura, setAltura] = useState<string>('');
    const [peso, setPeso] = useState<string>('');
    const [idade, setIdade] = useState<string>('');
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
    const handleCreateAccount = async (e: React.FormEvent) => {


        try {
            const response = await api.post('/register/', {
                username,
                email,
                senha: password,
                altura,
                peso,
                nivel_atividade: atividade,
                genero: sexo,
                idade
            })
            .then(function (response){
                console.log("Success!")
                console.log(response)
            })
        } catch (error) {
            console.log(error)
        }

    }

    return (
    <div className="w-screen h-screen bg-neutral-100 flex flex-col items-center justify-center gap-10">

        <h1 className='text-3xl font-bold'>Cadastro</h1>

        <div className='flex items-center gap-10'>

            <div className="w-96 flex flex-col justify-between gap-4">

                <form onSubmit={handleCreateAccount} className='flex flex-col items-center gap-4 text-neutral-100'>
                    <div className='w-full px-2 bg-neutral-700 border-b-4 border-blue-300 flex justify-between items-center'>
                        <input 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            type="text" 
                            className='flex-1 py-2 bg-transparent outline-none'  
                            placeholder='Nome'
                        />
                    </div>

                    <div className='w-full px-2 bg-neutral-700 border-b-4 border-blue-300 flex justify-between items-center'>
                        <input 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email" 
                            className='flex-1 py-2 bg-transparent outline-none'  
                            placeholder='Email'
                        />
                    </div>
                    
                    <div className='w-full px-2 bg-neutral-700 border-b-4 border-blue-300 flex justify-between items-center'>
                        
                        <input 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type={viewPassword ? 'text' : 'password'} 
                            className='flex-1 py-2 bg-transparent outline-none '  
                            placeholder='Password'
                        />
                        
                        {viewPassword  &&
                            <button onClick={tugglePassword} className='p-2'>
                                <EyeNoneIcon  className='size-4'/>
                            </button>
                        }
                        
                        {!viewPassword &&
                            <button onClick={tugglePassword} className='p-2'>
                                <EyeOpenIcon  className='size-4'/>
                            </button>
                        }  
                        
                    </div>

                    <div className='grid grid-cols-3 gap-4'>

                        <div className='flex-1 px-2 bg-neutral-700 border-b-4 border-blue-300 flex justify-between items-center'>
                            <input 
                                value={altura}
                                onChange={(e) => setAltura(e.target.value)}
                                type="number" 
                                className='flex-1 py-2 bg-transparent outline-none typeNumber'  
                                placeholder='Altura (em cm)'
                            />
                        </div>

                        <div className='flex-1 px-2 bg-neutral-700 border-b-4 border-blue-300 flex justify-between items-center'>
                            <input 
                                value={peso}
                                onChange={(e) => setPeso(e.target.value)}
                                type="number" 
                                className='flex-1 py-2 bg-transparent outline-none typeNumber'  
                                placeholder='Peso (em kg)'
                            />
                        </div>

                        <div className='flex-1 px-2 bg-neutral-700 border-b-4 border-blue-300 flex justify-between items-center'>
                            <input 
                                value={idade}
                                onChange={(e) => setIdade(e.target.value)}
                                type="number" 
                                className='flex-1 py-2 bg-transparent outline-none typeNumber'  
                                placeholder='Idade'
                            />
                        </div>

                    </div>

                    {/* Gênero */}
                    <div className='w-full bg-neutral-700 text-neutral-400 p-2 border-b-4 border-blue-300'>
                        
                        <p className='font-semibold'>Qual seu gênero?</p>

                        <div className='text-sm mt-2 flex gap-6'>
                            <label>
                                <input 
                                type="radio" 
                                value="masculino" 
                                className='mr-2'
                                checked={sexo === 'masculino'} 
                                onChange={handleSexo} 
                                />
                                masculino
                            </label>
                            
                            <label>
                                <input 
                                type="radio" 
                                value="femenino" 
                                className='mr-2'
                                checked={sexo === 'femenino'} 
                                onChange={handleSexo} 
                                />
                                femenino
                            </label>
                        </div>
                        
                        
                    </div>

                    {/* Nível de Atividade física */}
                    <div className='w-full bg-neutral-700 text-neutral-400 p-2 border-b-4 border-blue-300'>
                        
                        <p className='font-semibold'>Qual é o seu nível de atividade física?</p>
                        <p className='text-xs'>Leve em consideração uma pessoa muito ativa sendo aquela que tem trabalhos agitados como garçom, pedreiro, bombeiro, etc. </p>

                        <div className='text-sm mt-2 flex flex-col'>

                            <label>
                                <input 
                                    type="radio" 
                                    value="muito ativo" 
                                    className='mr-2'
                                    checked={atividade === 'muito ativo'} 
                                    onChange={handleAtividade} 
                                /> muito ativo
                            </label>
                            
                            <label>
                                <input 
                                    type="radio" 
                                    value="ativo" 
                                    className='mr-2'
                                    checked={atividade === 'ativo'} 
                                    onChange={handleAtividade} 
                                /> ativo
                            </label>

                            <label>
                                <input 
                                    type="radio" 
                                    value="levemente ativo" 
                                    className='mr-2'
                                    checked={atividade === 'levemente ativo'} 
                                    onChange={handleAtividade} 
                                /> levemente ativo
                            </label>

                            <label>
                                <input 
                                    type="radio" 
                                    value="sedentario" 
                                    className='mr-2'
                                    checked={atividade === 'sedentario'} 
                                    onChange={handleAtividade} 
                                /> sedentário
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