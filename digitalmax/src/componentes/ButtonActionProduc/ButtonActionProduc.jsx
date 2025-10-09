import './ButtonActionProduc.css'

function ButtonActionProduc(prop){
    const estado = prop.status
    return(
        <div className= {  `contentButtonDetalles ${estado}`} >
            <p>{prop.text}</p>
        </div>
    );
}

export default ButtonActionProduc