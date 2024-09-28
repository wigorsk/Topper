"use client"

import { Header } from "@/components/Header";
import { API } from "@/data/API";
import { ChevronLeftIcon, ChevronRightIcon, Cross1Icon } from '@radix-ui/react-icons';
import { use, useState } from "react";


export default function Home() {

  // className='basis-*'
  const basis = 'basis-20 md:basis-28 lg:basis-44 '

  // VARIÁVEIS
  const [popup, setPopup] = useState<boolean>(false);

  // Expandir alimento selecionado
  const [popupAddFood, setPopupAddFood] = useState<boolean>(false);
  const [food, setFood] = useState<number>(0)

  // Campo de Search
  const [search, setSearch] = useState<string>('');
  const searchFiltered = API.filter((item) => item.name.includes(search))

  // Gasto Diário
  const tmb:number = 2100;
  const [dailyExpense, setDailyExpense] = useState<number>(1000)
  const remainingKcal:number = tmb - dailyExpense

  // Abrir Pop-up para pesquisar alimentos
  const handleButtonClick = () => {
    setPopup(!popup);
    setSearch('');
  }

  // Abrir Pop-up para adicionar alimento
  const addFoodButton = (index: number) => {
    setPopupAddFood(!popupAddFood)
    setFood(index)
  }

  // Adicionar alimento
  const AddFoodList = () => {
    setPopupAddFood(false)
    setPopup(false);
    setSearch('');
  }

  return (
    <div className="w-screen h-screen bg-neutral-100">
      
      <Header /> {/* Menu */}

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


          {/* Table */}
          <table className="flex flex-col">
            
            {/* Período da Refeição */}
            <thead className="font-bold text-sm sm:text-lg md:text-xl xl:text-2xl">
              <tr><th className="flex-1 text-start">Café da Manhã</th></tr>
            </thead>

            {/* Body */}
            <tbody className="flex flex-col gap-2">

              {/* Alimento Adicionado */}
              <tr className="py-2 flex items-center text-center bg-neutral-300 text-neutral-950">
                <td className="flex-1 text-start ml-5 md:ml-10 text-xs sm:text-sm md:text-base line-clamp-1">Nome do alimento</td>
                <td className={`${basis}`}>...</td>
                <td className={`${basis}`}>...</td>
                <td className={`${basis}`}>...</td>
                <td className={`${basis}`}>...</td>
              </tr>

              {/* Button de Adicionar Comida */}
              <tr className="flex items-center text-center bg-blue-950 text-neutral-100">
                <td className="flex-1 text-start">
                  <button 
                    onClick={handleButtonClick}
                    className="px-5 md:px-10 py-2 text-xs sm:text-sm md:text-base" 
                    >Adicionar</button>
                </td>
                <td className={`${basis}`}>...</td>
                <td className={`${basis}`}>...</td>
                <td className={`${basis}`}>...</td>
                <td className={`${basis}`}>...</td>
              </tr>
              
            </tbody>

          </table>

        </div> 

        {popup && 
          <div className="absolute top-0 left-0 w-screen h-screen bg-black/50 flex items-center justify-center">
            <div className="w-2/4 h-2/4 pb-10 bg-neutral-100 flex flex-col items-center">

              <div className="w-full flex justify-end"><button className="p-2" onClick={handleButtonClick}><Cross1Icon className="size-6"/></button></div>
              
              <div className="flex gap-5">
                <input 
                type="text" 
                placeholder="Pesquisar alimento"
                value={search}
                onChange={(e) => setSearch(e.target.value)} 
                className="px-2 py-1 outline-none bg-transparent border-b border-neutral-950"
                />
              </div>

              {search &&
                <ul className="w-10/12 mt-10 grid grid-cols-1 gap-4 pr-4 overflow-y-scroll">

                  {searchFiltered.map((item, index) => (
                    <li key={index} className="flex justify-between p-4 border border-black/50">

                        <h1 className="text-lg font-bold">{item.name}</h1>
                        <div>
                          <button 
                            onClick={() => addFoodButton(index)}
                            className="px-2 py-1 bg-blue-900 text-neutral-100 rounded-lg">Expandir</button>
                        </div>
                    </li>
                  ))}
                </ul>
              }

              
              

              


            </div>
          </div>
        }

        {popupAddFood &&
          <div className="w-screen h-screen absolute top-0 left-0 bg-black/50 flex items-center justify-center">
            <div className="w-80 bg-neutral-100">

              <div className="w-full flex justify-end"><button className="p-2" onClick={() => setPopupAddFood(!popupAddFood)}><Cross1Icon className="size-6"/></button></div>
              <div className="px-4 mb-4">
                <h1 className="text-xl font-bold">{searchFiltered[food].name}</h1>
                <div className="px-4 py-2 flex flex-col gap-1">
                  <div className="flex justify-between"><p>Carboidratos:</p> {(searchFiltered[food].carboidratos)}</div>
                  <div className="flex justify-between"><p>Gorduras:</p> {searchFiltered[food].gorduras}</div>
                  <div className="flex justify-between"><p>Proteínas:</p> {searchFiltered[food].proteinas}</div>
                </div>

                <div className="flex gap-2 mt-2">
                  <input 
                    type="text" 
                    placeholder="Gramas"
                    className="w-28 px-2 py-1 outline-none bg-neutral-300 text-neutral-900 rounded-lg"
                  />
                  <button
                  onClick={AddFoodList} 
                    className="px-2 py-1 bg-blue-900 text-neutral-100 rounded-lg">Adicionar
                  </button>
                </div>
                
              </div>
              
              

              {/* {searchFiltered.map((item, index) => (
                    <li key={index} className="flex flex-col p-4">

                          <h1 className="text-lg font-bold">{item.name}</h1>

                        <div className="px-4 py-2 flex flex-col gap-1">
                          <div className="flex justify-between"><p>Gramas:</p> {(item.gramas)}</div>
                          <div className="flex justify-between"><p>Carboidratos:</p> {(item.carboidratos)}</div>
                          <div className="flex justify-between"><p>Gorduras:</p> {item.gorduras}</div>
                          <div className="flex justify-between"><p>Proteínas:</p> {item.proteinas}</div>
                        </div>

                        <div>
                          <button 
                            className="px-2 py-1 bg-blue-900 text-neutral-100 rounded-lg">Adicionar
                          </button>
                        </div>
                    </li>
                  ))} */}

            </div>
          </div>
        }

      </div>
    </div>
  );
}
