import React, { useState } from 'react';
import axios from 'axios';
import "./App.scss"

function App() {
  const [jokes, setJokes] = useState([]);

  const getJokes = async () => {
    const options = {
      method: 'GET',
      url: 'https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes',
      headers: {
        'X-RapidAPI-Key': '6f39753bd7msh189ff5c29f0bf09p11acecjsn013739bef035',
        'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      setJokes(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <div className='container'>
        <h1 >Random Joke Generator:</h1>
        {jokes.map((jokeObj, index) => (
          <p key={index}>{jokeObj.joke}</p>
        ))}
        <button onClick={getJokes}>Get new jokes</button>
      </div>
    </div>
  );
}

export default App;
