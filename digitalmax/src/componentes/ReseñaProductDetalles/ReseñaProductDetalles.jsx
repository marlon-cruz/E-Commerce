import StardCalificacion from "../StardCalificacion/StardCalificacion";
import '../ReseñaProductDetalles/ReseñaProductDetalles.css'
function ReseñaProductDetalles(props){
    return(
        <div className="reseñaUser">
            <div>
                <h4>{props.nombre}</h4>
                <StardCalificacion tamaño = {props.calificacion}/>
            </div>
                
                <p>{props.reseña}</p>
        </div>
        
        
    );
}

export default ReseñaProductDetalles