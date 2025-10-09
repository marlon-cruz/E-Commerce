import '../ButtonContactUser/ButtonContactUser.css'

function ButtonContactUser(prop){
    return(
        <div className='ButtonContUser'>
            <img src= {prop.src} alt= {prop.alt}/>
        </div>
    );
}

export default ButtonContactUser;