import iconStard from '../../assets/img/icon stard.svg'
import './ProductoDescripcion.css'
import IconoStard from '../../assets/img/Icon Stard';
import ButtonDetallesProduct from '../ButtonCantProduct/ButtonCantProduct';
import ButtonActionProduc from '../ButtonActionProduc/ButtonActionProduc';
import StardCalificacion from '../StardCalificacion/StardCalificacion';
function ProductoDescripcion(prop){
    return(
        
       <div className='productDesContent'>       
            <h3>
               {prop.descripcion}
            </h3>
                <StardCalificacion tamaño = {20}/>
            <h2>
                USD{prop.precio}
            </h2>
            <div className='contentButonAction'>
                <ButtonDetallesProduct/>
                <ButtonActionProduc status = "ActionInactivo " text = "hola mundo"/>
                <ButtonActionProduc status = "ActionActivo" text = "hola mundo"/>

            </div>
        </div>

    );
     
} 

export default ProductoDescripcion;