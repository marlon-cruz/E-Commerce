import viteLogo from '/vite.svg'
import ProductoDescripcion from '../../componentes/ProductoDescripcion/ProductoDescripcion';
import PreciosComprar from '../../componentes/PreciosComprar/PreciosComprar';
import '../ProductoDetallado/ProductoDetallado.css'
import ReseñaProductDetalles from '../../componentes/ReseñaProductDetalles/ReseñaProductDetalles';
import { useEffect, useState } from 'react';
import ZoomImage from '../ZoomImage/ZoomImage';
import ButtonEditar from '../ButtonEditar/ButtonEditar';
export function calcularPrecioDescuento(precio, descuento) {
    return (precio - (precio * descuento) / 100).toFixed(2);
}

    
//EN PROCESO
// function sinDescuento(prop) {
//     if (prop.descuento < 0) {
//         return <PreciosComprar precioDescuento={calcularPrecioDescuento(props.precio, props.descuento)} precio={props.precio} descuento={props.descuento} stock={props.stock} />
//     }
//     else if(prop.descuento > 0){
//         return <EstadoProducto estado="PocasUnidades" text="Pocas Unidades" />
//     }
// }
function ProductoDetallado(props) {
const [statusImage, setStatusImage] = useState(false)

const [createReseña, setCreateReseña] = useState(false)

const [imagenSrcZoom, setimagensrc] = useState("")


function handleZoomImg(srcImage) {

        setimagensrc(srcImage)
        setStatusImage(!statusImage)
}
function handleCreateReseña() {
        setCreateReseña(!createReseña)
}
const cambioStadozoom  = () =>{
        setStatusImage(!statusImage)

}
    return (
        <>

        {statusImage? <ZoomImage cambio={cambioStadozoom}  img={imagenSrcZoom} /> : null}
            <section className='contentDetallesSection'>
                <main className="contentDetalles">
                    <div className='infoProducto'>
                        <h2>{props.nombre}</h2>
                        <p>{props.categoria}</p>
                        <h2>Marca: {props.marca}</h2>
                        <p>{props.modelo}</p>
                    </div>
                    <div className='imgProducto'>
                        <img onClick={() => {handleZoomImg(props.imagen)}} src={props.imagen} alt="Producto" />
                    </div>
                    <div className='contentImageSec'>
                        <img onClick={() => {handleZoomImg(props.imagen2)}} src={props.imagen2} alt="Producto" />
                        <img onClick={() => {handleZoomImg(props.imagen3)}} src={props.imagen3} alt="Producto" />
                    </div>
                </main>
                <main className='calificacionPrecio'>
                    <PreciosComprar StardCalificacion = {props.StardCalificacion} producID = {props.productID} precioDescuento={calcularPrecioDescuento(props.precio, props.descuento)} precio={props.precio} descuento={props.descuento} stock={props.stock} />
                </main>
            </section>
            {/*  */}
            <section className='contentDescripcionSection'>
                <main className='contentDescripcion'>
                    <div>
                        <ProductoDescripcion nombreCompleto={props.nombre} descripcion={props.descripcion} />
                    </div>
                </main>
                <main className='contentEspecificaciones'>
                    <h2>Especificaciones</h2>
                    <div className="especificaciones-mouse">
                        {props.especificaciones}
                    </div>
                </main>
                <main className='contentReseña'>

                    <section className='contentReseñaText'>
                    <h2>Reseñas</h2>
                    <ButtonEditar  event = {handleCreateReseña}  textEdit={"Escribir reseña"}/>
                    </section>
                    <div>
                        <ReseñaProductDetalles
                            titulo={"Buen producto"}
                            nombre={"jimmy 🏳️‍🌈"} calificacion={15}
                            reseña={"Holi solo quiero decirle a la gente que hizo este esta tienda que esemause esta muy precioso, gracias por pensar en nosotros los quiero, besitos 😚💅"} />
                    </div>
                </main>
                {createReseña?<div className='createReseña'>aodbajsbdjasbdjbasdbsibdais</div> : null}  
            </section>
        </>
    );
}
export default ProductoDetallado;