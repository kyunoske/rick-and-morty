import React from 'react';
import "./CharacterCard.css";
import {Character} from "../models/Character";
import {Link, NavLink, useLocation } from 'react-router-dom';
import CharacterGallery from './CharacterGallery';

const string = "Name".slice(0, 250).concat('...');

type CharacterCardProps = {
    character: Character;
}

function CharacterCard(props: CharacterCardProps) {

    return (
        <div>
            <div className="character-card">
                <h5>
                    {props.character.name.substring(0,30)}
                </h5>
                <div>
                    <img src={props.character.image} />
                </div>
                <div className="status-details">
                    <p>
                        {props.character.status}
                    </p>
                    <p>
                        <Link to={"/character/" + props.character.id}>Details</Link>
                    </p>
                    <p>
                        <Link to={"/character/" + props.character.id}>Status</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CharacterCard;