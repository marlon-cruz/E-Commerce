import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import LayoutPadre from './layout/LayoutPadre.jsx'
import Productos from './layout/ProductosLayout/Productos'
import HamburguerMenu from './componentes/HamburguerMenu/HamburguerMenu'
import Header from './componentes/Header/Header'
import DetallesLayout from './layout/DetallesLayout/DetallesLayout'
import ButtonContactUser from './componentes/ButtonContactUser/ButtonContactUser'
import viteLogo from '/vite.svg'
import FormLogin from './Paginas/FormLogin.jsx'
import ProductosLayout from './layout/ProductosLayout/Productos.jsx'
import LayoutMenuHamburguesa from './layout/LayoutMenuHamburguesa.jsx'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <Router>{/* Envolvemos la aplicación */}
      <Routes>{/* Para el contenedor de rutas */}
      
      <Route path='/' element={<LayoutPadre/>}>{/* Envuelvo las rutas en un LayoutPadre el cual lleva el MenuHeader */}
        <Route index element={<FormLogin/>}/>{/* Definimos la ruta */}
      
      
        <Route path='/app' element={<LayoutMenuHamburguesa/>}>{/* Envuelvo con el MenuHamburguesa */}
        <Route path="/app/productos" element={<ProductosLayout/>}/>
        <Route path="/app/productos/producto/1" element={<DetallesLayout/>}/> {/* Ruta de detalle de producto EL 1 ES TEMPORAL */}
        <Route path="*" element={ <div>Pagina no encontrada - 404</div> }/>
        </Route>
      </Route>
      </Routes>
      
    </Router>
    {/* <HamburguerMenu/>
    <Header/>
    <DetallesLayout/> */}
    {/* <FormLogin/> */}


    {/* <div className='contentButton'>
          <ButtonContactUser src = {viteLogo} alt = "user"  />  
          <ButtonContactUser src = {viteLogo} alt = "user"/>
     </div> */}
    </>
  )
}

export default App
