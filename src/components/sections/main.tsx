import { User } from "@/types/user"
import { InfosTable } from "../InfosTable"
import { Table } from "../table"

const Main = ( { user }: {user: User} ) => {

  return (
      <main className="w-full">

        <InfosTable basis='basis-20 md:basis-28 lg:basis-44'/>

        <div className='flex flex-col gap-10'>

          <Table user={user} mealTime='café da manhã' />
          <Table user={user} mealTime='almoço' />
          <Table user={user} mealTime='jantar' />
          <Table user={user} mealTime='lanche' />

        </div>

      </main>
  )
}

export default Main;