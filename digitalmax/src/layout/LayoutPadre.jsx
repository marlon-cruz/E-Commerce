import Header from "../componentes/Header/Header";
import { Outlet } from "react-router-dom";
function LayoutPadre(){
    return(
        <>
        <Header />
        <main>
            <Outlet />
        </main>
        </>
    );
}
export default LayoutPadre