import React from 'react';
import "./CharacterCard.css";
import {Character} from "../models/Character";

const string = "Name".slice(0, 250).concat('...');

function CharacterCard(props: Character) {
    return (
        <div>
            <div className="character-card">
                <h3>
                    {props.name.substring(0,17)}
                </h3>
                <div>
                    <img src={props.image} />
                </div>
                <p>
                    {props.status}
                </p>
            </div>
        </div>
    );
}

export default CharacterCard;