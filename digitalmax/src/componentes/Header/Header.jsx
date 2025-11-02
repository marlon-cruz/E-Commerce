import '../Header/Header.css'
import React from 'react'
import logo from '../../assets/img/Logo_digitalmax.png'
import shop from '../../assets/img/icon shop.png'
import user from '../../assets/img/icon user.png'
import search from '../../assets/img/icon search.png'
import engranaje from '../../assets/img/Icon_engranaje.png'
import { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import FormLogin from '../../layout/LayoutCrearCuenta/LayoutCrearCuenta'



function Header(){
  const [menu, setMenu] = useState (false)
  const cambioMenu = () =>{
    setMenu(!menu)
  }
  const navigate = useNavigate();
    const handleAccessRegistro = () =>{
        navigate('')
        setMenu(false)
    }
    const handleAccessLogin = () =>{
        navigate('/app/login')
            setMenu(false)
      }
    const handleAccessProduct = () =>{
        navigate('/app/productos')
            setMenu(false)
      }
    return(
        <header className='headerComponent'>
            <div onClick={handleAccessProduct}>
            <img className='logoEcommer' src= {logo} alt="DigitalMax" />
            <h2>DigitalMax</h2>
            </div>

            <div className='contentInput'>
            <input type="search" placeholder="Buscar producto"></input>
            <img src= {search} alt="" />
            </div>
            <div className='headercontenicon'>
                  <div>
                    <img src= {shop} alt="" />
                    <p>$0.00</p>
                   
                  </div>
                    <img src= {user} alt=""  onClick={cambioMenu}/>
                     <ul className={`contentMenuHover ${menu ? 'contentMenuHoverActive': ''}`}>
                      <a   onClick={handleAccessRegistro}><li>Registrate</li></a> <hr/>
                      <a  onClick={handleAccessLogin}><li>Iniciar Sesión</li></a>
                    </ul>
                    <img src= {engranaje} alt="" />

            </div>
            
        </header>
    );
}

export default Header;