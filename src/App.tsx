import React, {useEffect, useState} from 'react';
import './App.css';
import CharacterGallery from "./components/CharacterGallery";
import {Character} from "./models/Character";
import axios from "axios";
import Pagination from "./components/Pagination";

export default function App() {

    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [charsPerPage, setCharsPerPage] = useState(10);

    useEffect(() => {
        console.log("Calling API, when component was rendered the first time (=mounted) ")
        axios.get("https://rickandmortyapi.com/api/character")
            .then((response) => {
                return response.data
            })
            .then((data) => {
                setCharacters(data.results)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])
// use state to set "setCharacters" and get the data you need back
// data is the variable and results is how the data is labeled under in the Rick&Morty api

    const lastCharIndex = currentPage * charsPerPage;
    const firstCharIndex = lastCharIndex - charsPerPage;
    const currentChars = characters.slice(firstCharIndex, lastCharIndex)

  return (
      <div>
        <div className="header">
          <h1>Rick and Morty Characters</h1>
        </div>
        <hr />
        <CharacterGallery characters={currentChars} />
          <Pagination
              totalChars={characters.length}
              charsPerPage={charsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
          />
      </div>

  );
}

