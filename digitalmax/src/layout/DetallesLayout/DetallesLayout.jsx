import viteLogo from '/vite.svg'
import ProductoDescripcion from '../../componentes/ProductoDescripcion/ProductoDescripcion';
import PreciosComprar from '../../componentes/PreciosComprar/PreciosComprar';
import '../DetallesLayout/DetallesLayout.css'
import ReseñaProductDetalles from '../../componentes/ReseñaProductDetalles/ReseñaProductDetalles';

function DetallesLayout() {
    return (
        <>
            <section className='contentDetallesSection'>
                <main className="contentDetalles">
                    <div className='infoProducto'>
                        <h2>Mouse Inalámbrico </h2>
                        <p>Perifericos</p>
                        <h2>KLIP XTRME</h2>
                        <p>KMW-760</p>
                    </div>
                    <div className='imgProducto'>
                        <img src={viteLogo} alt="Producto" />
                    </div>
                </main>
                <main className='calificacionPrecio'>
                    <PreciosComprar precioDescuento="12.72" precio="15.90" />
                    {/* <h2 className='precioDescuento'>$12.72</h2>
                <h3 className='precio'>$15.90</h3> */}
                </main>
            </section>

            <section className='contentDescripcionSection'>
                <main className='contentDescripcion'>
                    <div>
                        <ProductoDescripcion nombreCompleto="Mouse inalámbrico ergonómico con batería recargable 600 / 800 / 1200 DPI" descripcion="Mouse inalámbrico con tecnología inalámbrica de 2,4 GHz, cómodo contorno para el uso diestro" />
                    </div>
                </main>
                <main className='contentEspecificaciones'>
                    <h2>Especificaciones</h2>
                    <div class="especificaciones-mouse">
                        <ul>
                            <li><strong>Tipo:</strong> Mouse de 6 botones inalámbrico, ultra-ergonómico y recargable</li>
                            <li><strong>Tecnología:</strong> Óptico</li>
                            <li><strong>Resolución del IPC:</strong> 800/1200/1600</li>
                            <li><strong>Tasa de informe USB:</strong> 125 Hz</li>
                            <li><strong>Interfaz:</strong> Dongle compacto USB 2.0</li>
                            <li><strong>Aceleración máxima:</strong> 28 pulgadas por segundo</li>
                            <li><strong>Ciclo de vida del micro interruptor:</strong> Un millón de veces</li>
                            <li><strong>Frecuencia inalámbrica:</strong> 2.4GHz</li>
                            <li><strong>Distancia inalámbrica:</strong> Hasta 10 m</li>
                            <li><strong>Interruptor de encendido:</strong> Sí</li>
                            <li><strong>Modo de ahorro de energía:</strong> Sí</li>
                            <li><strong>Voltaje de funcionamiento:</strong> 3.3V-4.2V</li>
                            <li><strong>Tipo de batería:</strong> Batería de litio recargable de 400 mAh</li>
                        </ul>
                    </div>
                </main>
                <main className='contentReseña'>
                    <h2>Reseñas</h2>
                    <div>
                        <ReseñaProductDetalles
                            titulo={"Buen producto"}
                            nombre={"jimmy 🏳️‍🌈"} calificacion={15}
                            reseña={"Holi solo quiero decirle a la gente que hizo este esta tienda que esemause esta muy precioso, gracias por pensar en nosotros los quiero, besitos 😚💅"} />
                    </div>
                </main>

            </section>
        </>
    );
}
export default DetallesLayout;