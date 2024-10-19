import { TableContext } from "@/contexts/tableContext";
import { User } from "@/types/user";
import { useContext, useState } from "react"

const Aside = ( { user }: { user: User } ) => {
    const { dailyExpense } = useContext(TableContext)

    const subtracao = (tmb: number, expense: number) => {
        return (tmb - expense)
    }

    const rest = subtracao(user.taxa_metabolica_basal, dailyExpense == null ? 0 : dailyExpense)

    return (
        <p className="text-2xl font-semibold mb-6 flex gap-5">
            
            <div className="flex items-end gap-1">
                 {user.taxa_metabolica_basal} 
                 <p className="font-normal text-sm">tmb</p>
            </div> -

            <div className="flex items-end gap-1">
                {dailyExpense == null ? 0 : dailyExpense.toFixed(2)}
                <p className="font-normal text-sm">kcal</p>

            </div> =

            <div className="flex items-end gap-1"> 
                {rest} 
                <p className="font-normal text-sm">kcal</p>
            </div>

        </p>
    )
}

export default Aside;