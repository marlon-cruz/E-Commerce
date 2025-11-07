
import './ButtonCantProduct.css'
import { useState } from 'react';

function ButtonDetallesProduct(prop){
    const [countProduct, setCountProduct] = useState(1);

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
    }

    return(
        <div className="contentButtonDetalles">
                <span onClick={() => {conteo("-")}}>-</span>
                <div>{countProduct}</div>
                <span onClick={() => {conteo("+")}}>+</span>
        </div>
    );
}

export default ButtonDetallesProduct;