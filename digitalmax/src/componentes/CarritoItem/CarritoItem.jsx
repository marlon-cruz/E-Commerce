
import ButtonActionProduc from '../../componentes/ButtonActionProduc/ButtonActionProduc'

import ButtonCantProduct from '../../componentes/ButtonCantProduct/ButtonCantProduct';

import { useState } from 'react';

import { calcularPrecioDescuento } from '../ProductoDetallado/ProductoDetallado';
function CarritoItem(
    {
        title,descripcion,precio,stock,descuento,cantidadSelect,eliminarItem,nameItem
    }
){
    let precioDescuento = calcularPrecioDescuento(parseFloat(precio), parseFloat(descuento))

    let inicioTotal = precioDescuento * parseInt(cantidadSelect)  
    const [total, setTotal] = useState(inicioTotal)
    
    const seteoTotal = (cantProduct, signo) =>{
       if(signo == "+"){
        setTotal(precioDescuento * (cantProduct +1))
       }else{
        setTotal(precioDescuento * (cantProduct -1))
       }

    }
    return(
        <tr key={nameItem}>
            <td>{title}</td>
            <td>{descripcion}</td>
            <td><span>${parseFloat(precioDescuento).toFixed(2)}</span><p>${parseFloat(precio).toFixed(2)}</p></td>
            <td className='cellBtn'><ButtonCantProduct CantInicial = {cantidadSelect}  Event = {seteoTotal} carritoBtnCant= {"CarritoCantbtn"} stock = {parseInt(stock)}/></td>
            <td>${parseFloat(total)}</td>
            <td className='cellBtn'><ButtonActionProduc nameItem = {nameItem} status = {"CarritoCompraBTN"} text = {"Eliminar"} Click={eliminarItem}/></td>
        </tr>
    );
}

export default CarritoItem;