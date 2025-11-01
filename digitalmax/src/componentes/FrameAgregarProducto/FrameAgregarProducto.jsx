import './FrameAgregarProducto.css'
import { InputForm } from '../../componentes/InputForm/InputForm';
import ButtonActionProduc from '../ButtonActionProduc/ButtonActionProduc';
import { useState } from 'react';
import { crearProduct } from '../../API/ProductosAPI';
function FrameAgregarProducto(){
   
    const [textImg, setTextImage] = useState('')

   const [dataProduc,setDataProduct] = useState({
         nombre :  "" ,
         categoria :  "" ,
         marca :  "" ,
         modelo :  "" ,
         imagenUrl :  " "   ,
         precio : 0,
         descuento : 0,
         stock : 0,
         descripcion :  "" ,
         especificaciones :  "" ,
         detallesFisicos :  "",
         paisOrigen :  "" ,
         valoracion : 3,
    }
)

    function resetStatusForm(){
        const imagenAntigua = document.getElementById("archivo_subir")
        imagenAntigua.value = ""
        setDataProduct({
        nombre :  "" ,
         categoria :  "" ,
         marca :  "" ,
         modelo :  "" ,
         imagenUrl :  " "   ,
         precio : 0,
         descuento : 0,
         stock : 0,
         descripcion :  "" ,
         especificaciones :  "" ,
         detallesFisicos :  "",
         paisOrigen :  "" ,
         valoracion : 3,
        }
            
        )
    }
    
    function handleChaneValue(event){
        if(event.target.name == "precio" || event.target.name == "descuento" || event.target.name == "stock"){
            setDataProduct({...dataProduc, [event.target.name] : parseFloat(event.target.value)})     

        }else{
            setDataProduct({...dataProduc, [event.target.name] : event.target.value})     
        }
        console.log(dataProduc)
       
    }
    
    const handleSubmitProducto= async (event) => {
      
        event.preventDefault();
       try {
            const res =  await crearProduct(dataProduc);
            const data = res.json();
            if(res.status === 201){
                alert("Producto guardado con exito");
            }
       } catch (error) {
            console.error('Producto no creado', error)
            alert("Error al crear el producto intentelo nuevamente")
        }   
        resetStatusForm()
       
      
    }
    function handleImageText(event){
        const image = event.target.files[0];
        const lector = new FileReader()
        console.log(textImg)
        lector.onload = () => {
            setDataProduct({...dataProduc, ["imagenUrl"] : lector.result})     
        }

        lector.readAsDataURL(image)
        console.log(dataProduc.imagenUrl)
    }
  

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
                <InputForm data={"nombre"} event={handleChaneValue} name={"inputAgregarProducto"}label={"Nombre del producto"}/>
                <InputForm data={"categoria"} event={handleChaneValue} name={"inputAgregarProducto"}label={"Categoria"}/>
          
            </div>
            <div>
                <InputForm data={"marca"} event={handleChaneValue} name={"inputAgregarDatos"}label={"Marca"}/>
                <InputForm data={"modelo"} event={handleChaneValue} name={"inputAgregarDatos2"}label={"Modelo"}/>
                
            </div>        
        </div>
        <h2>
                Visuales
            </h2>
        <div className='visibles'>
        <h4>Imagenes del producto</h4>
         <input type="file" onChange={handleImageText} id="archivo_subir" className="subirImagenes"/>
        </div>
        <h2>
                Información Comercial
            </h2>
        <div className='contentComercial'>
            <div>   
                <InputForm data={"precio"} event={handleChaneValue} name={"inputAgregarDatos"}label={"Precio(USD)"} type={"number"} />
                <InputForm data={"descuento"} event={handleChaneValue} name={"inputAgregarDatos"}label={"Descuento(%)"}/>  
                <InputForm data={"stock"} event={handleChaneValue} name={"inputAgregarDatos"}label={"Categoria(Stock / disponible)"}/>  
            </div>
        </div>
        <h2>Descripción Comercial</h2>
       <div className='contentPricipales'>
            <div>   
                <InputForm data={"descripcion"} event={handleChaneValue} name={"inputAgregarProducto"}label={"Descripción breve"}/>
                <InputForm data={"especificaciones"} event={handleChaneValue} name={"inputAgregarProducto"}label={"Descripción completa / Especificaciones"}/>
          
            </div>
            <div>
                <InputForm data={"detallesFisicos"} event={handleChaneValue} name={"inputAgregarDatos"}label={"Peso / dimenciones"}/>
                <InputForm data={"paisOrigen"} event={handleChaneValue} name={"inputAgregarDatos2"}label={"País de origen"}/>
                
            </div>  
                  
        </div>
        <div className='contentButonAdmin'>
            <ButtonActionProduc text = {"Cancelar"} />
            <ButtonActionProduc Click = {handleSubmitProducto} text = {"Guardar"} status = {"ActionActivo"}/>
        </div>

        </div>
        

    )
}

export default FrameAgregarProducto;