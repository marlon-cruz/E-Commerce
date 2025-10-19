import { Inputs } from "../InputsLogin/Inputs"

import '../InputForm/InputForm.css'

export function InputForm({label, place, name, id}) {
    return(
        <div className="inputForm">
            <h3>{label}</h3>
            <Inputs type = "text" name = {name}  placeholder= {place} required = {true} />
        </div>
    );

}