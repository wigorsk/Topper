"use client"

import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

import { Header } from "@/components/Header";
import { Table } from "@/components/Table";
import { InfosTable } from '@/components/InfosTable';
import { Footer } from '@/components/Footer';

const getUser = () => {
  const storedUser = localStorage.getItem('user');
  if(storedUser == null) return null;
  return JSON.parse(storedUser);
}

export default function Home() {
  
  const router = useRouter();
  const user = getUser() ?? router.push('/signin')

  const basis = 'basis-20 md:basis-28 lg:basis-44'
  console.log(user)

  // Gasto Diário
  const tmb:number = user.taxa_metabolica_basal;
  const [dailyExpense, setDailyExpense] = useState<number>(1000)
  const remainingKcal:number = tmb - dailyExpense

  return (
    <div className="w-screen bg-neutral-100">
      
      <Header username={user.username} /> 

      <div className="container mx-auto pb-20 flex flex-col items-center px-10 gap-5">

        <div className="flex items-center gap-4 mt-5"> 
          <button><ChevronLeftIcon className=" size-10 "/></button>
            <h1 className="text-2xl font-bold">Hoje</h1>  
          <button><ChevronRightIcon className=" size-10 "/></button>
        </div>

        <hr className="w-screen"/> 

        <div className="text-2xl font-bold flex items-center gap-5">
          <p>{tmb}</p> - 
          <p>{dailyExpense}</p> = 
          <p>{remainingKcal}</p>
        </div>

        <div className="w-full xl:w-10/12 mt-10">

          <InfosTable basis={basis}/>

          <div className='flex flex-col gap-10'>

            <Table user={user} mealTime='café da manhã' />

            <Table user={user} mealTime='almoço' />
            
            <Table user={user} mealTime='jantar' />

            <Table user={user} mealTime='lanche' />

          </div>

        </div> 
      </div>

      <Footer />

    </div>
  )
}
