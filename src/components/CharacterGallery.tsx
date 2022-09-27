import React, {useState} from 'react';
import "./CharacterGallery.css";
import CharacterCard from "./CharacterCard";
import {Character} from "../models/Character";

type CharacterGalleryProps = {
    characters: Character[];
}

function CharacterGallery(props: CharacterGalleryProps) {

    const [data, setData] = useState("");
    const filteredCharacters = props.characters.filter((character) => character.name.toLowerCase().includes(data));
    const clearSearch = () => {
        setData("");
    }

    return (
        <div>
            <div className="input-container">
                <div className="input-group input-group-sm mb-3">
                    <button onClick={clearSearch} className="input-group-text" id="inputGroup-sizing-sm">Clear</button>
                    <input style={{width: "80%"}} type="text" placeholder="enter a name"
                           onChange={(event ) => setData(event.target.value)} />
                </div>
            </div>

            <div className="cards">
                {filteredCharacters.map((card, index) => {
                    return <CharacterCard
                        key={card.id}
                        character={card}
                    />
                })}
            </div>
        </div>

    );
}

export default CharacterGallery;