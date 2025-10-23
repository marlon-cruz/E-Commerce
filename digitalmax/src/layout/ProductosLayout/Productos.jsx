import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import './Productos.css'

import CardCategoria from '../../componentes/CardCategoria/CardCategoria'

import CardProduct from '../../componentes/CardProduct/CardProduct'
import ButtonContactUser from '../../componentes/ButtonContactUser/ButtonContactUser'
import { useNavigate } from 'react-router-dom'
function Productos() {
    const navigate = useNavigate();
    const handleProducto = () =>{
        navigate('/app/productos/producto/1')
    }
  return (
    
    <>
    
    <main className='mainConteiner'>
      
      
      <div className="contentCat">
      <CardCategoria src = {reactLogo} alt = "Promociones" />
      <CardCategoria src = {viteLogo} alt = "Lo nuevo" />
      <CardCategoria src = {reactLogo} alt = 'Lo más vendido' />
      </div>
        <h2 className='subtituloProductos'>Productos</h2>
      <div className="contentProduct">
      <CardProduct click={handleProducto} src = {viteLogo} description = "Mouse inalambrico ergonomico" precio = "13.99" />
      <CardProduct click={handleProducto} src = {viteLogo} description = "Mouse inalambrico ergonomico" precio = "13.99" />
      <CardProduct click={handleProducto} src = {viteLogo} description = "Mouse inalambrico ergonomico" precio = "13.99" />
      <CardProduct click={handleProducto} src = {viteLogo} description = "Mouse inalambrico ergonomico" precio = "13.99" />
      <CardProduct click={handleProducto} src = {viteLogo} description = "Mouse inalambrico ergonomico" precio = "13.99" />
      <CardProduct click={handleProducto} src = {viteLogo} description = "Mouse inalambrico ergonomico" precio = "13.99" />
      <CardProduct click={handleProducto} src = {viteLogo} description = "Mouse inalambrico ergonomico" precio = "13.99" />
      <CardProduct click={handleProducto} src = {viteLogo} description = "Mouse inalambrico ergonomico" precio = "13.99" />
      <CardProduct click={handleProducto} src = {viteLogo} description = "Mouse inalambrico ergonomico" precio = "13.99" />
      <CardProduct click={handleProducto} src = {viteLogo} description = "Mouse inalambrico ergonomico" precio = "13.99" />

      </div>

      
    </main>
     
      
    </>
  )
}

export default Productos
