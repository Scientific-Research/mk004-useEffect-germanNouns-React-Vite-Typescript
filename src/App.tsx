// import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface IGermanNouns {
  article: string;
  singular: string;
  plural: string;
}

const germanNounsURL =
  'https://edwardtanguay.vercel.app/share/germanNouns.json';

function App() {
  const [showGermanNouns, setShowGermanNouns] = useState<IGermanNouns[]>([]);

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

      <p className="description">
        There are <span>{showGermanNouns.length}</span> germnan Nouns in this
        JSON file!
      </p>

      <div className="germanNouns">
        {showGermanNouns.map((gn, index) => (
          <div className="germanNoun" key={index}>
            <p className="article-singular">
              {gn.article} {gn.singular}
            </p>
            <p className="plural">{gn.plural}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
