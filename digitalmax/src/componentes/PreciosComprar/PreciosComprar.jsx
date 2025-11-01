import iconStard from '../../assets/img/icon stard.svg'
import './PreciosComprar.css'
import IconoStard from '../../assets/img/Icon Stard';
import ButtonDetallesProduct from '../ButtonCantProduct/ButtonCantProduct';
import ButtonActionProduc from '../ButtonActionProduc/ButtonActionProduc';
import StardCalificacion from '../StardCalificacion/StardCalificacion';
import EstadoProducto from '../EstadoProducto/EstadoProducto';
function ProductoDescripcion(prop) {
    return (

        <div className='productDesContent'>
            <StardCalificacion tamaño={20} />
            <h2>
                $ {prop.precioDescuento}
            </h2>
            <h3>
                <s>$ {prop.precio}</s>
            </h3>
            <div className='contentButonAction'>
                <div>
                    <ButtonDetallesProduct />
                    <p>20% de Descuento</p>
                    <EstadoProducto estado="Disponible" text="En Stock"/>
                </div>
                <span>
                    <ButtonActionProduc status="ActionActivo" text="Agregar al carrito" />
                    <ButtonActionProduc status="ActionActivo" text="Comprar ahora" />
                </span>

            </div>
        </div>

    );

}

export default ProductoDescripcion;