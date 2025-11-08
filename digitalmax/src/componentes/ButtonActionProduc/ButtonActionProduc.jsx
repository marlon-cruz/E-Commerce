import './ButtonActionProduc.css'

function ButtonActionProduc({status, text, Click}){
    const estado = status
    return(
        <div onClick={Click} className= {  `contentButtonDetalles ${estado}`} >
            <p>{text}</p>
        </div>
    );
}

export default ButtonActionProduc