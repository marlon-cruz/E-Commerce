import '../HeaderAdmin/HeaderAdmin.css'
import logo from '../../assets/img/Logo digitalmax.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'



function Header() {
  const [menu, setMenu] = useState(false)
  const cambioMenu = () => {
    setMenu(!menu)
  }
  const navigate = useNavigate();
  const handleAccessRegistro = () => {
    navigate('')
    setMenu(false)
  }
  const handleAccessLogin = () => {
    navigate('/app/login')
    setMenu(false)
  }
  const handleAccessProduct = () => {
    navigate('/app/productos')
    setMenu(false)
  }
  return (
    <header className='headerComponent'>
      <div onClick={handleAccessProduct}>
        <img className='logoEcommer' src={logo} alt="DigitalMax" />
        <h2>Administrador DigitalMax</h2>
      </div>
    </header>
  );
}

export default Header;