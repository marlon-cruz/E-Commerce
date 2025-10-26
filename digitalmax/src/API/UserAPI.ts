
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
