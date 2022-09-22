import React from 'react';
import "./CharacterGallery.css";
import CharacterCard from "./CharacterCard";
import {Character} from "../models/Character";

type CharacterGalleryProps = {
    characters: Character[];
}


function CharacterGallery(props: CharacterGalleryProps) {
    return (
            <div className="cards">
                    {props.characters.map((card, index) => {
                        return <CharacterCard
                            key={index}
                            name={card.name}
                            image={card.image}
                            status={card.status}
                        />
                    })}
            </div>
    );
}

export default CharacterGallery;