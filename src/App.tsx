// import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const germanNounsURL =
  'https://edwardtanguay.vercel.app/share/germanNouns.json';

function App() {
  const [showGermanNouns, setShowGermanNouns] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios(germanNounsURL);
      const germanNouns = response.data;
      console.log(germanNouns);
      setShowGermanNouns(germanNouns);
    })();
  }, []);

  return (
    <div className="App">
      <h1>useEffect-germanNouns-React-Vite-Typescript</h1>
      <h3>Welcome to this Site.</h3>

      <p>
        There are <span>{showGermanNouns.length}</span> germnan Nouns in this
        JSON file!
      </p>

      <div className="germanNouns">
        {showGermanNouns.map((gn) => (
          <div className="germanNoun">
            <p>
              {gn.article} {gn.singular}
            </p>
            <p>{gn.plural}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
