import '../LayoutCarritoCompra/LayoutCarritoCompra.css'

import ButtonActionProduc from '../../componentes/ButtonActionProduc/ButtonActionProduc'

import ButtonCantProduct from '../../componentes/ButtonCantProduct/ButtonCantProduct';

function LayoutCarritoCompra(){
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
                    <tr>
                        <td>Mause</td>
                        <td>Mouse Inalambrico KLIP XTREME Ultraergonomico KMW-760</td>
                        <td><span>$12.54</span><p>$31</p></td>
                        <td className='cellBtn'><ButtonCantProduct carritoBtnCant= {"CarritoCantbtn"} stock = {5}/></td>
                        <td>$90</td>
                        <td className='cellBtn'><ButtonActionProduc status = {"CarritoCompraBTN"} text = {"Eliminar"}/></td>
                    </tr>
                </tbody>
               </table>
            </div>
        </div>        
    )
}

export default LayoutCarritoCompra;