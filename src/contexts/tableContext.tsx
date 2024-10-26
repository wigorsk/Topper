"use client"

import { api } from "@/app/utils/api";
import { FoodType } from "@/types/food";
import { ReactNode, useEffect, useState } from "react";
import { createContext } from "react";

type TableContextProps = {
    getDate: () => void;
    refreshTable: () => void;
    expense: (n: number) => void;
    setList: React.Dispatch<React.SetStateAction<FoodType[]>>;
    list: FoodType[];
    dailyExpense: number | null;
}
export const TableContext = createContext<TableContextProps>({} as TableContextProps);

const TableProvider = ( { children }: { children: ReactNode } ) => {

    const [ list, setList ] = useState<FoodType[]>([])
    const [dailyExpense, setDailyExpense] = useState<number | null>(null)


    const getDate = () => {
        const date = new Date()

        const ano = date.getFullYear();
        const mes = (date.getMonth() + 1).toString().padStart(2, '0');
        const dia = date.getDate().toString().padStart(2, '0');

        return `${ano}-${mes}-${dia}`;

    }

    const refreshTable = async () => {
    
        try {
            const response = await api.get(`user/consume/`, {
                params: {
                    data_ingestao: getDate()
                }    
            });
            setList(response.data.data || []);
        } 

        catch (error) {
        }

    };
    

    const expense = (n: number) => {
        setDailyExpense(n)
    }
    

    return (
        <TableContext.Provider value={{ refreshTable, getDate, expense, setList, list, dailyExpense }}>
            { children }
        </TableContext.Provider>
    )
}

export default TableProvider;