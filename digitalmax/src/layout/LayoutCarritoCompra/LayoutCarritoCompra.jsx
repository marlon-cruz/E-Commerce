import '../LayoutCarritoCompra/LayoutCarritoCompra.css'

import CarritoItem from '../../componentes/CarritoItem/CarritoItem';
function LayoutCarritoCompra(){
    function elimianarItem(){
        alert("Eliminar Item")
    }
    return(
        <div className='layoutCarritoCompra'>
            <h2>MI CARRETILLA</h2>
            <div className='contenedorItemCarrito'>
               <table>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody className='bodyTableCarrito'>
                    <CarritoItem title={"Mouse"} descripcion={"una descripcion"} precio = {"3.5"} stock={"10"} descuento = {"10"} cantidadSelect={3} eliminarItem={elimianarItem}/>
                    <CarritoItem title={"Mouse"} descripcion={"una descripcion"} precio = {"3.5"} stock={"10"} descuento = {"10"} cantidadSelect={3} eliminarItem={elimianarItem}/>
                    <CarritoItem title={"Mouse"} descripcion={"una descripcion"} precio = {"3.5"} stock={"10"} descuento = {"10"} cantidadSelect={3} eliminarItem={elimianarItem}/>
                    <CarritoItem title={"Mouse"} descripcion={"una descripcion"} precio = {"3.5"} stock={"10"} descuento = {"10"} cantidadSelect={3} eliminarItem={elimianarItem}/>
                    <CarritoItem title={"Mouse"} descripcion={"una descripcion"} precio = {"3.5"} stock={"10"} descuento = {"10"} cantidadSelect={3} eliminarItem={elimianarItem}/>
                 
                </tbody>
               </table>
            </div>
        </div>        
    )
}

export default LayoutCarritoCompra;