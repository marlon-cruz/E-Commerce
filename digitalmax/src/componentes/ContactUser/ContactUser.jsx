import './ContactUser.css'
import ButtonContactUser from '../ButtonContactUser/ButtonContactUser';
import viteLogo from '/vite.svg'
function ContactUser(){
    return(

<div className='contentButton'>
          <ButtonContactUser src = {viteLogo} alt = "user"  />  
          <ButtonContactUser src = {viteLogo} alt = "user"/>
</div>
    );

}
export default ContactUser