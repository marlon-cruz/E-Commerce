export function Inputs({type, name, placeholder, required}){
    return(
        <>
            {/* <h3>{text}</h3> */}
            <input type={type} className={name} placeholder={placeholder} required={required} />
        </>
    )
}