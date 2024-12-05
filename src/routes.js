import { BrowserRouter, Routes, Route } from "react-router-dom";

//Importação das pages
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";

//Importação dos componentes
import Header from "./components/Header";


function RoutesApp(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={ <Home />}/>
                <Route path="/sobre" element={ <Sobre />}/>
                <Route path="/contato" element={ <Contato />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;