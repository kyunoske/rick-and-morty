import React from 'react';
import { useParams } from 'react-router-dom';
import { Character } from '../models/Character';
import CharacterCard from './CharacterCard';

type CharacterStatusProps = {
    characters: Character[]
}

function CharacterStatus(props: CharacterStatusProps) {
    const params = useParams();
    const id = params.id;
    
    if (id === undefined) {
        return (<>Your character has no status</>)
    }
    
    const character = props.characters.find((character) => character.id === parseInt(id));
    
    if (character === undefined) {
        return (<>Your character has no status</>)
    }
    
    return (
        <div>
            <h1>Characters</h1>
            <p>{character.status}</p>
            <p>{character.name}</p>
            <p>{character.image}</p>
        </div>
    );
}

export default CharacterStatus;