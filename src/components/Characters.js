import React, { useState, useEffect } from 'react';

const Characters = () => {


  const [character, setCharacter] = useState([]);

  useEffect(() => {
    {
      fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => setCharacter(data.results))
    }
  })

  return (
    <div className="containerC">
      <div className="characters">
        {
          character.map(item => (
            <div className="box" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="character">
                <h3 className="name">{item.name}</h3>
                <p className="status">Estado: {item.status}</p>
                <p className="species">Especie: {item.species}</p>
                <p className="gender">
                  Género: {item.gender}</p>
                <p className="origin">Origen: {item.origin.name}</p>
                <p className="location">
                  Localización: {item.location.name}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Characters;

