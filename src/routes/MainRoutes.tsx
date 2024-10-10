import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AuthLayout from '../pages/auth'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import PrivateRoute from './PrivateRoute'

function MainRoutes() {
  return (
    <Routes>
    <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>} />
    <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
  </Routes>
  )
}

export default MainRoutes