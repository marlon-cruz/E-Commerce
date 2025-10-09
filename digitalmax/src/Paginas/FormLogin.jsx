import '../index.css'
import { Inputs } from '../components/Inputs'
import { Buttons } from '../components/Buttons'


function FormLogin(){
    return(
    <section className='Login'>
        <h2 className="textSubTitle texth2">Bienvenido a DigitalMax</h2>
        <h3 className="textName texth3">Nombre</h3>
        <Inputs type = "text" name="input_name input" placeholder="Nombre" required = {true}/>
        <h3 className="textTelefono texth3">Teléfono</h3>
        <Inputs type = "text" name="input_telefono input" placeholder="Teléfono" required = {true}/>
        <h3 className="textEmail texth3">Correo</h3>
        <Inputs type = "text" name="input_correo input" placeholder="Correo eletrónico" required = {true}/>
        <h3 className= "textPassword texth3">Contraseña</h3>
        <Inputs type = "text" name="input_password input" placeholder="Contraseña" required = {true}/>
        <h3 className= "textPasswordConfir texth3">Confirmación de contraseña</h3>
        <Inputs type = "text" name="input_password_confir input" placeholder="Confirme su contraseña" required = {true}/>
        <aside>
            <Buttons name = "registrarse buttons" text='Registrarse'/>
            <h3 className= "textO">o</h3>
            <Buttons name = "acceder buttons" text='Acceder'/>
        </aside>
        

    </section>
    )
}
export default FormLogin