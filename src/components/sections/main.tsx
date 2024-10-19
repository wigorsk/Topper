import { User } from "@/types/user"
import { Header } from "../table/header"
import { Table } from "../table"

const Main = ( { user }: {user: User} ) => {

  return (
      <main className="w-full">

        <Header />

        <div className='flex flex-col gap-10'>
          <Table user={user} mealTime='café da manhã' />
          <Table user={user} mealTime='almoço' />
          <Table user={user} mealTime='janta' />
          <Table user={user} mealTime='lanche' />
        </div>

      </main>
  )
}

export default Main;