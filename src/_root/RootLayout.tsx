import BottomBar from '@/components/shared/BottomBar'
import { Outlet, Navigate } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='w-full'>
      <section className='flex flex-1 h-full'>
        <Outlet />
      </section>
      <BottomBar />
    </div>
  )
}

export default RootLayout
