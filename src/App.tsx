import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import CharacterGallery from "./components/CharacterGallery";
import CharacterDetails from "./components/CharacterDetails";
import CharacterStatus from "./components/CharacterStatus";
import {Character} from "./models/Character";
import axios from "axios";
import Pagination from "./components/Pagination";

export default function App() {

    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [charsPerPage, setCharsPerPage] = useState(8);

    let one = "https://rickandmortyapi.com/api/character";
    let two = "https://rickandmortyapi.com/api/character?page=2";
    let three = "https://rickandmortyapi.com/api/character?page=3";

    const requestOne = axios.get(one);
    const requestTwo = axios.get(two);
    const requestThree = axios.get(three);

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
          <Router>
              <Routes>
                  <Route path="/" element={<CharacterGallery 
                      characters={currentChars} />} />
                  <Route path="/character/:id" element={<CharacterDetails
                      characters={characters}/>} />
                  <Route path="/character/:id" element={<CharacterStatus
                      characters={characters}/>} />
              </Routes>
          </Router>
          <Pagination
              totalChars={characters.length}
              charsPerPage={charsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
          />
      </div>

  );
}

