import '../HamburguerMenu/HamburguerMenu.css'
import iconMenu from '../../assets/img/icon barra menu.png'

function HamburguerMenu(){
    
    return(<>
        <div className='hamburguerMenu'>
            <img src= {iconMenu}/>
        </div>
    </>);
}

export default HamburguerMenu;