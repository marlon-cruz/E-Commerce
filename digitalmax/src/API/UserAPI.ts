
const API = 'http://localhost:3000'

interface datasUser{
        nombre: string;
        telefono: string;
        correo: string;
        contraseña:string;
        
}


export const crearUser = async (datos: datasUser) => 
    fetch(`${API}/user`, {
        method: 'POST',
        body: JSON.stringify(datos),
        headers:{
            'Content-Type': 'application/json'
        }
    })

    interface datosLoginUser{
        correo: string;
        contraseña:string;
    }
    
export const obtenerUsers = async (datos: datosLoginUser) => 
    fetch(`${API}/user/${datos.correo}`, {
        method: 'GET'
})

export const obtenerUserID = async (id:string) => 
    fetch(`${API}/user/${id}`, {
        method: 'GET',
    })

    interface dataCarrito{
        idProducto: string,
        cantSelect: number
    }

export const agregarItemCarrito = async (idUser: string, dataProduct:dataCarrito) =>{
    fetch(`${API}/user/${idUser}/carrito/`,{
        method: 'POST',
        body: JSON.stringify(dataProduct),
        headers:{
            'Content-Type': 'application/json'
        }
    })
}
export function obtenerItemCarrito(iduser:string){
    return `${API}/user/${iduser}/carrito`
}
