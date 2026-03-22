import './globals.css'

import { Route, Routes } from 'react-router-dom'
import { Home } from './_root/pages'
import RootLayout from './_root/RootLayout'

const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
      {/*Public Routes */}


      {/*Private Routes */}
      <Route element = {<RootLayout/>}>
        <Route index element={<Home/>}/>
      </Route>

      </Routes>
    </main>
  )
}

export default App
