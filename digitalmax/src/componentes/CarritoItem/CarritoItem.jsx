
import ButtonActionProduc from '../../componentes/ButtonActionProduc/ButtonActionProduc'

import ButtonCantProduct from '../../componentes/ButtonCantProduct/ButtonCantProduct';

import { useState } from 'react';

import { calcularPrecioDescuento } from '../ProductoDetallado/ProductoDetallado';
function CarritoItem(
    {
        title,descripcion,precio,stock,descuento,cantidadSelect,eliminarItem
    }
){
    let precioDescuento = calcularPrecioDescuento(parseFloat(precio), parseFloat(descuento))
    console.log(precioDescuento)
    const [total, setTotal] = useState(precioDescuento * parseFloat(cantidadSelect))
    
    const seteoTotal = (cantProduct, signo) =>{
       if(signo == "+"){
        setTotal(precioDescuento * (cantProduct +1))
       }else{
        setTotal(precioDescuento * (cantProduct -1))
       }
            
        
    }
    return(
        <tr>
            <td>{title}</td>
            <td>{descripcion}</td>
            <td><span>${parseFloat(precioDescuento).toFixed(2)}</span><p>${parseFloat(precio).toFixed(2)}</p></td>
            <td className='cellBtn'><ButtonCantProduct CantInicial = {cantidadSelect}  Event = {seteoTotal} carritoBtnCant= {"CarritoCantbtn"} stock = {parseInt(stock)}/></td>
            <td>${total.toFixed(2)}</td>
            <td className='cellBtn'><ButtonActionProduc status = {"CarritoCompraBTN"} text = {"Eliminar"} Click={eliminarItem}/></td>
        </tr>
    );
}

export default CarritoItem;