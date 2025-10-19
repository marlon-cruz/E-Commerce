import '../SocialLoginButton/SocialLoginButton.css'

export function SocialLoginButton({icon,alt,colorClass, socialName}){
    return(
        <div className= {`socialLogin ${colorClass}`} >
           <img src= {icon} alt= {alt} />
           <h4>{socialName}</h4>
        </div>
    );
}