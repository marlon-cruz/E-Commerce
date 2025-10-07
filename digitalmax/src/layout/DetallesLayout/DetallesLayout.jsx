import viteLogo from '/vite.svg'
import ProductoDescripcion from '../../componentes/ProductoDescripcion/ProductoDescripcion';
import '../DetallesLayout/DetallesLayout.css'
import ReseñaProductDetalles from '../../componentes/ReseñaProductDetalles/ReseñaProductDetalles';
function DetallesLayout(){
    return(
        <>
        <main className="contentDetalles">
                <div>
                    <img src= {viteLogo} alt="Producto" />
                </div>
                <div>
                    <ProductoDescripcion descripcion = " Mouse inalámbrico ergonómico con batería recargable 600 / 800 / 1200 DPI" precio = "13.99"/>
                </div>
        </main>
        <main className='contentReseña'>
            <h2>Reseñas</h2>
            <ReseñaProductDetalles
            nombre = {"Juan perez"}
            calificacion = {15}
            reseña = {"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta repudiandae iure harum non. Modi, maiores. Dolorum, ratione sequi quas enim provident iste illo sed repudiandae, voluptatum maxime impedit voluptate harum."}
            />
        </main>
        </>
    );
}


export default DetallesLayout;