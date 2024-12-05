import { Link } from "react-router-dom"
import Home from "../../pages/Home";
import Sobre from "../../pages/Sobre";
import Contato from "../../pages/Contato";
import "./style.css";

function Header(){
    return(
        <div className="menu">
            <h1>REACT NUTRI</h1>
            <header>
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre-nós</Link>
                <Link to="/contato">Contato</Link>
            </header>
        </div>
    
    )
}

export default Header;