import React, { Link } from "react-router-dom";

function CharacterItem(props) {
    return (
        <article className="item__container">
            <span>{props.name}</span>
            <img className="item__img" src={props.image} alt="character" />
            <Link className="item__button" to={`/character/${props.id}`}>View more</Link>
        </article>
    );
}
export default CharacterItem;