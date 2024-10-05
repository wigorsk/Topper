"use client"

import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

import { Header } from "@/components/Header";
import { Table } from "@/components/Table";

export default function Home() {

  const [user, setUser] = useState<any>({});
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    
    if (!storedUser) {
      router.push('/signin');
    } else {
      setUser(JSON.parse(storedUser));
    }
    
  }, [router])

  const basis = 'basis-20 md:basis-28 lg:basis-44'

  // Gasto Diário
  const tmb:number = 2100;
  const [dailyExpense, setDailyExpense] = useState<number>(1000)
  const remainingKcal:number = tmb - dailyExpense

  return (
    <div className="w-screen h-screen bg-neutral-100">
      
      {/* Menu */}
      <Header 
        username={user.username}
      /> 

      <div className="container mx-auto flex flex-col items-center px-10 gap-5">

        {/* Dia */}
        <div className="flex items-center gap-4 mt-5"> 
          <button><ChevronLeftIcon className=" size-10 "/></button>
          <h1 className="text-2xl font-bold">Hoje</h1>  
          <button><ChevronRightIcon className=" size-10 "/></button>
        </div>

        <hr className="w-screen"/> {/* Linha Horizontal */}

        {/* Gasto Diário */}
        <div className="text-2xl font-bold flex items-center gap-5">
          <p>{tmb}</p> - <p>{dailyExpense}</p> = <p>{remainingKcal}</p>
        </div>

        {/* Refeições */}
        <div className="w-full xl:w-10/12 mt-10">


        {/* Menu da Tabela */}
        <div className="flex text-center text-xs md:text-sm font-semibold mb-5 sm:mb-0">
            <h1 className="flex-1"></h1>
            <h1 className={`${basis}`}>quantidade</h1>
            <h1 className={`${basis}`}>carboidratos</h1>
            <h1 className={`${basis}`}>gorduras</h1>
            <h1 className={`${basis}`}>proteínas</h1>
        </div>

        <div className='flex flex-col gap-10'>

          <Table mealTime='Café da Manhã' />

          <Table mealTime='Almoço' />
          
          <Table mealTime='Jantar' />

          <Table mealTime='Lanche' />

        </div>

      </div> 
       

      </div>

    </div>
  );
}
