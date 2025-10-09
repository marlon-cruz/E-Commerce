import '../Header/Header.css'
import React from 'react'
import logo from '../../assets/img/Logo digitalmax.png'
import shop from '../../assets/img/icon shop.png'
import user from '../../assets/img/icon user.png'
import search from '../../assets/img/icon search.png'



function Header(){
    return(
        <header className='headerComponent'>
            <div>
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
                    <img src= {user} alt="" />
            </div>
            
        </header>
    );
}

export default Header;