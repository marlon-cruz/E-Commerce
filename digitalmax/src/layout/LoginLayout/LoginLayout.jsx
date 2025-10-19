import '../LoginLayout/LoginLayout.css'
import digitalMax from '../../assets/img/Logo digitalmax.png' 
import { InputForm } from '../../componentes/InputForm/InputForm';
import { SocialLoginButton } from '../../componentes/SocialLoginButton/SocialLoginButton';
import icon_Facebook from '../../assets/img/icon_Facebook.png'
import icon_Google from '../../assets/img/icon_Google.png'
import { Buttons } from '../../componentes/ButtonLogin/Buttons';

import { useNavigate } from 'react-router-dom';


function LoginLayout(){
    
    const navigateReguistre = useNavigate();
        const handleAccessRegistroLogin = () =>{
            navigateReguistre('/')
        }
         const handleAccessAutorizado = () =>{
            navigateReguistre('/app/productos')
        }
    
    return (
        <div className='contenedorPadreLogin'>
            <div className='LoginContent'>
             <h2>Bienvenido a DigitalMax</h2>
            <InputForm place={'Correo electronico'} label={"Correo"} name = {'Correo'} />  
            <InputForm place={'Contraseña'} label={"Contraseña"} name = {'contraseña'} />  
            <a>¿Olvidaste tu contraseña?</a>
            <div className='contentSocialLogin'>
            <SocialLoginButton icon = {icon_Facebook} alt={"FaceBook"} colorClass={"blue"} socialName={"Facebook"}/>
            <SocialLoginButton icon = {icon_Google} alt={"Google"} colorClass={"white"} socialName={"Google"}/>
           
            </div>
            <div className='contentAcciont'>
                <a onClick={handleAccessRegistroLogin}  className='LoginCreate_Clase'>¿No tienes una cuenta? Regístrate</a>
                <Buttons click = {handleAccessAutorizado} name = "registrarse buttons" text='Acceder'/>
            </div>
        </div>
        
               
    </div>
    )
}

export default LoginLayout;