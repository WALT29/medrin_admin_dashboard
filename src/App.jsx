import { useState } from 'react'
import './App.css'
import AdminDashboard from './ADMIN/admin_dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AdminDashboard/> 
    </>
  )
}

export default App
