import React from 'react';
import "./CharacterDetails.css";
import { Character } from '../models/Character';
import {Link, useParams } from 'react-router-dom';

type CharacterDetailsProps = {
    characters: Character[];
}

function CharacterDetails(props: CharacterDetailsProps) {
    //get the id from url
    const params = useParams();
    const id = params.id;

    if (id === undefined) {
        return (<>Character not found</>)
    }

    // @ts-ignore
    const character = props.characters.find((character) => character.id === parseInt(id))

    if (character === undefined) {
        return (<>Character not found</>)
    }

    return (
        <div>
            <Link to={"/"} style={{marginLeft: "20px"}}>Back</Link>
            <div className="character-card">
                <div className="detail-header">
                    <h5>
                        {character.name}
                    </h5>
                </div>

                <div>
                    <img src={character.image }/>
                </div>
                <p>
                    {character.status}
                </p>
            </div>
        </div>
    );
}

export default CharacterDetails;