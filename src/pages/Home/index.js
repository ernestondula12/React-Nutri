import { useState, useEffect } from "react";
import "./style.css";

//Importando o componente botão
import Botao from "../../components/Botao";


function Home(){

    const [nutri, setNutri] = useState([]);

    useEffect(() => {
        function loadAPI(){
            const url = "https://sujeitoprogramador.com/rn-api/?api=posts"

            fetch(url)
            .then((req) => req.json())
            .then((json) => {
                console.log(json);
                setNutri(json);
            })
        }

        loadAPI();
    }, [])


    return(
        <div>
            { nutri.map((item) => {
                return(
                    <article key={ item.id } className="post">
                        <h1 className="titulo">{item.titulo}</h1>
                        <img src={ item.capa } className="capa" />
                        <p className="subtitulo">{ item.subtitulo }</p>
                        <Botao />
                    </article>
                )
            })}
        </div>
    )
}

export default Home;