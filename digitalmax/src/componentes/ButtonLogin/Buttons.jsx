export function Buttons({click, name, text}){
    return(
        <>
        <button onClick={click} className={name}>{text}</button>
        </>
    )
}
