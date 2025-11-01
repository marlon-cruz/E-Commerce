import StardCalificacion from "../StardCalificacion/StardCalificacion";
import '../ReseñaProductDetalles/ReseñaProductDetalles.css'
function ReseñaProductDetalles(props){
    return(
        <div className="reseñaUser">
            <h3>{props.titulo}</h3>
            <div className="infoUserReseña">
                <StardCalificacion tamaño = {props.calificacion}/>  
                <h4>{props.nombre}</h4>
            </div>
            <span>
                <p>{props.reseña}</p>
            </span>
        </div>
        
        
    );
}

export default ReseñaProductDetalles