// import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface IGermanNouns {
  article: string;
  singular: string;
  plural: string;
  isOpen: boolean;
}

const germanNounsURL =
  'https://edwardtanguay.vercel.app/share/germanNouns.json';

function App() {
  const [showGermanNouns, setShowGermanNouns] = useState<IGermanNouns[]>([]);

  useEffect(() => {
    (async () => {
      const response = await axios(germanNounsURL);
      const rawNouns = response.data;

      const _nouns: IGermanNouns[] = [];
      rawNouns.forEach((rawNoun: IGermanNouns) => {
        const noun = {
          ...rawNoun,
          isOpen: false,
        };
        _nouns.push(noun);
      });
      setShowGermanNouns(_nouns);
      console.log(showGermanNouns);
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
            <div className="front">{gn.singular}</div>
            {gn.isOpen && (
              <div className="back">
                <div className="singular">
                  {gn.article} {gn.singular}
                </div>
                <div className="plural">{gn.plural}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
