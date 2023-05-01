import React from "react";
import './styles.css';

const Card = (props) => ( // esta propriedade props permite que eu coloque elementos dentro do card desenhado para o jogo
    <article className="card">
        {props.children}
    </article>
);

export default Card;