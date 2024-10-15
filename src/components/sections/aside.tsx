import { User } from "@/types/user";
import { useState } from "react"

const Aside = ( { user }: { user: User } ) => {

    const [dailyExpense, setDailyExpense] = useState<number>(1000)

    return (
        <p className="text-2xl font-bold mb-6">
            {user.taxa_metabolica_basal} - {dailyExpense} = {user.taxa_metabolica_basal - dailyExpense}
        </p>
    )
}

export default Aside;