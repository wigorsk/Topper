"use client"

import Header from "@/components/sections/header";
import Section from "@/components/sections/section";
import Aside from "@/components/sections/aside";
import Main from '@/components/sections/main';
import Footer from '@/components/sections/footer';

import { useRouter } from 'next/navigation';

export default function Home() {

  const getUser = () => {
    const storedUser = localStorage.getItem('user');
    if(storedUser == null) return null;
    return JSON.parse(storedUser);
  }

  const router = useRouter(); 
  const user = getUser() ?? router.push('/signin')


  return (
    <div className="w-screen bg-neutral-100">
      
        <Header username={user?.username} /> 

          <div className="container mx-auto flex flex-col items-center py-6 gap-6">
            <Section/>
            <hr className="w-screen"/>
            <Aside user={user}/>
            <Main user={user}/>
          </div>
          
        <Footer />


    </div>
  )
}
