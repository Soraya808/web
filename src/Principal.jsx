import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import './estilos.css'
import Acordeon from "./Acordeon";
import Cartas from "./Cartas";
import Modal1 from "./Modal1"
function Lapaz(props){
    return(
      <div className="titulo"><h1>INICIO</h1>
      <Acordeon></Acordeon>
      </div>
    );
}
function Cocha(pros){
return(
<div className="menu"><h1>OFERTAS</h1>
   <Cartas></Cartas>
   <Modal1></Modal1>
   </div>
);
}
 function Principal(props){
    return( 
        <div>
            <div className="titu"><center><h2><p style={{ fontFamily: 'Super Adorable' }}>
SERGIO EL BAILADOR</p></h2></center></div>

            <div className="nave">
                <center>
                <table>
                    <tr>
                        <td>
                     <Link to='./'><h5>Inicio</h5></Link></td>
                    <td><Link to='./pag2'><h5>Ofertas de cursos</h5></Link> </td> </tr>
                </table>
                </center>
            </div>
            <div className="Contenido">
                <Routes>
                    <Route path="/"element={<Lapaz></Lapaz>}></Route>
                    <Route path="/pag2"element={<Cocha></Cocha>}></Route>
                </Routes>
            </div>
        
        <div className="foot"> PIE DE PAGINA: <br />Gabriela Soraya Fernandez Chipana CI: 12830842</div>
       </div>
    ) 
}
export default Principal;