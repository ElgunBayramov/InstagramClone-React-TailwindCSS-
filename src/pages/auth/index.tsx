import { Outlet } from 'react-router-dom'
import Footer from '../../layout/footer'

function AuthLayout() {
  return (
    <div className='w-full h-auto flex-col overflow-scroll'>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default AuthLayout