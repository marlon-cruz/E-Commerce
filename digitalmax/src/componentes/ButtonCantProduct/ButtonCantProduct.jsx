
import './ButtonCantProduct.css'
import { useState } from 'react';

function ButtonDetallesProduct(prop){
    const [countProduct, setCountProduct] = useState(prop.CantInicial == "" || prop.CantInicial == undefined ? 1 : prop.CantInicial );
   
    function conteo (signo){
        if(signo === "+"){
            if(countProduct < prop.stock){
            setCountProduct(countProduct + 1)
            
            }
        }else{
            if(countProduct <= 1){
                return
            }
            setCountProduct(countProduct - 1)
        }

        if(prop.Event != null){
                prop.Event(countProduct,signo)
        }
    }

    return(
        <div className= {`contentButtonDetalles ${prop.carritoBtnCant}`}>
                <span onClick={() => {conteo("-")}}>-</span>
                <div id='productoCantidadSelect'>{countProduct}</div>
                <span onClick={() => {conteo("+")}}>+</span>
        </div>
    );
}

export default ButtonDetallesProduct;