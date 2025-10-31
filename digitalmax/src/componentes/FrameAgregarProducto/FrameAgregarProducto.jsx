import './FrameAgregarProducto.css'
import { InputForm } from '../../componentes/InputForm/InputForm';
import ButtonActionProduc from '../ButtonActionProduc/ButtonActionProduc';
function FrameAgregarProducto(){
    return (
        
        <div className='contenedorAdminProductos'>
            
            <h2 className='titleAgregar'>
                Agregar Producto
            </h2>
            <h2>
                Información Principal
            </h2>
        <div className='contentPricipales'>
            <div>   
                <InputForm name={"inputAgregarProducto"}label={"Nombre del producto"}/>
                <InputForm name={"inputAgregarProducto"}label={"Categoria"}/>
          
            </div>
            <div>
                <InputForm name={"inputAgregarDatos"}label={"Marca"}/>
                <InputForm name={"inputAgregarDatos2"}label={"Modelo"}/>
                
            </div>        
        </div>
        <h2>
                Visuales
            </h2>
        <div className='visibles'>
        <h4>Imagenes del producto</h4>
         <input type="file" id="archivo-subir" className="subirImagenes"/>
        </div>
        <h2>
                Información Comercial
            </h2>
        <div className='contentComercial'>
            <div>   
                <InputForm name={"inputAgregarDatos"}label={"Precio(USD)"} type={"number"} />
                <InputForm name={"inputAgregarDatos"}label={"Descuento(%)"}/>  
                <InputForm name={"inputAgregarDatos"}label={"Categoria(Stock / disponible)"}/>  
            </div>
        </div>
        <h2>Descripción Comercial</h2>
       <div className='contentPricipales'>
            <div>   
                <InputForm name={"inputAgregarProducto"}label={"Descripción breve"}/>
                <InputForm name={"inputAgregarProducto"}label={"Descripción completa / Especificaciones"}/>
          
            </div>
            <div>
                <InputForm name={"inputAgregarDatos"}label={"Peso / dimenciones"}/>
                <InputForm name={"inputAgregarDatos2"}label={"País de origen"}/>
                
            </div>  
                  
        </div>
        <div className='contentButonAdmin'>
            <ButtonActionProduc text = {"Cancelar"} />
            <ButtonActionProduc text = {"Guardar"} status = {"ActionActivo"}/>
        </div>

        </div>
        

    )
}

export default FrameAgregarProducto;