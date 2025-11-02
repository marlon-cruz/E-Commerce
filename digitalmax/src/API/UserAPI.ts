
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
