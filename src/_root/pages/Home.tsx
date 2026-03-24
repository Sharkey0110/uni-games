import { gameItems } from '@/constants'

const Home = () => {
  return (
    <main className="text-center w-full">
      <section className="p-3 mb-5 bg-gray-400">
        <h1 className="font-bold text-3xl">Sharkey Games V1</h1>
        <h2 className="font-semibold text-lg">Only 1 "Game" rn</h2>
      </section>

      <section className="grid grid-cols-2 gap-24 content-evenly-gap mx-8 ">
        {gameItems.map((game: any) => {
          return(
            <div className='py-2 rounded-lg bg-orange-200' key={game.label}>
              <p>{game.label}</p>
              <p>{game.route}</p>
            </div>
          )
        })}
      </section>
    </main>
  )
}

export default Home
