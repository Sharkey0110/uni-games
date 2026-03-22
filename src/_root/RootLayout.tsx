import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
      <p>Root layout</p>
      <Outlet />
    </div>
  )
}

export default RootLayout
