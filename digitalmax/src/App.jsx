import { useState } from 'react'
import './App.css'
import Productos from './layout/ProductosLayout/Productos'
import HamburguerMenu from './componentes/HamburguerMenu/HamburguerMenu'
import Header from './componentes/Header/Header'
import DetallesLayout from './layout/DetallesLayout/DetallesLayout'
import ButtonContactUser from './componentes/ButtonContactUser/ButtonContactUser'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>

    <HamburguerMenu/>
    <Header/>
    <DetallesLayout/>


    <div className='contentButton'>
          <ButtonContactUser src = {viteLogo} alt = "user"  />  
          <ButtonContactUser src = {viteLogo} alt = "user"/>
     </div>
    </>
  )
}

export default App
