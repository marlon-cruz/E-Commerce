import iconStard from '../../assets/img/icon stard.svg'
import './PreciosComprar.css'
import IconoStard from '../../assets/img/Icon Stard';
import ButtonDetallesProduct from '../ButtonCantProduct/ButtonCantProduct';
import ButtonActionProduc from '../ButtonActionProduc/ButtonActionProduc';
import StardCalificacion from '../StardCalificacion/StardCalificacion';
import EstadoProducto from '../EstadoProducto/EstadoProducto';
function ProductoStock(prop) {
    if (prop.stock > 10) {
        return <EstadoProducto estado="Disponible" text="En Stock" />
    }
    else if(prop.stock < 10 && prop.stock > 0){
        return <EstadoProducto estado="PocasUnidades" text="Pocas Unidades" />
    }
    else if(prop.stock === 0){
        return <EstadoProducto estado="Agotado" text="Agotado" />
    }
}
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
                    <ButtonDetallesProduct stock={prop.stock}  />
                    <p>{prop.descuento}% de Descuento</p>

                    <ProductoStock stock={prop.stock} />
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