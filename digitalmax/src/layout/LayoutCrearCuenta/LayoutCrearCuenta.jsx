import './LayoutCrearCuenta.css'
import { Inputs } from '../../componentes/InputsLogin/Inputs'
import { Buttons } from '../../componentes/ButtonLogin/Buttons'
import { useNavigate } from 'react-router-dom'
import { SocialLoginButton } from '../../componentes/SocialLoginButton/SocialLoginButton'
import icon_Facebook from '../../assets/img/icon_Facebook.png'
import icon_Google from '../../assets/img/icon_Google.png'



function FormLogin(){
    const navigate = useNavigate();
    const handleLogin = () =>{
        navigate('/app/productos')
    }
    return(
        <>
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
            <SocialLoginButton icon = {icon_Facebook} alt={"FaceBook"} colorClass={"blue"} socialName={"Facebook"}/>
            <SocialLoginButton icon = {icon_Google} alt={"Google"} colorClass={"white"} socialName={"Google"}/>
        </aside>
            <a href="/Login" className='linkAcceder'>¿Ya tienes una cuenta? Inicia Sesión?</a>
        <aside>
            <Buttons name = "registrarse buttons" text='Registrarse'/>
            {/* <Buttons click={handleLogin} name = "acceder buttons" text='Acceder'/> */}
        </aside>
    </section>
        </>
    )
}
export default FormLogin