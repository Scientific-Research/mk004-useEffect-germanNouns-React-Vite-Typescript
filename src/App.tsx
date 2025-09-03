// import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface IGermanNouns {
  article: string;
  singular: string;
  plural: string;
  isOpen: boolean;
  isLearned: boolean;
}

const germanNounsURL =
  'https://edwardtanguay.vercel.app/share/germanNouns.json';

function App() {
  const [showGermanNouns, setShowGermanNouns] = useState<IGermanNouns[]>([]);
  // const [_isOpen, _setIsOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await axios(germanNounsURL);
      const rawNouns = response.data;

      const _nouns: IGermanNouns[] = [];
      rawNouns.forEach((rawNoun: IGermanNouns) => {
        const noun = {
          ...rawNoun,
          isOpen: false,
          isLearned: false,
        };
        _nouns.push(noun);
      });
      setShowGermanNouns(_nouns);
      console.log(showGermanNouns);
    })();
  }, []);

  // const handleOnOffFront = (gn: IGermanNouns) => {
  //   if (!gn.isOpen) {
  //     gn.isOpen = true;
  //     console.log(gn.isOpen);
  //   } else {
  //     gn.isOpen = false;
  //   }
  // };

  const handleOnOffFront = (gn: IGermanNouns) => {
    // First Solution
    // const handleOnOffFront = (gn: IGermanNouns) => {
    //   _setIsOpen(!_isOpen);
    //   gn.isOpen = _isOpen;
    // };

    // Second Solution
    // gn.isOpen = !gn.isOpen;
    // setShowGermanNouns([...showGermanNouns]);

    // Third Solution
    gn.isOpen = !gn.isOpen;
    const _showGermanNouns = [...showGermanNouns];
    setShowGermanNouns(_showGermanNouns);
  };

  const handleMarkAsLearnedClick = (gn: IGermanNouns) => {
    gn.isLearned = true;
    const _showGermanNouns = [...showGermanNouns];
    setShowGermanNouns(_showGermanNouns);
  };

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
          <React.Fragment key={index}>
            {!gn.isLearned && (
              <div className="germanNoun" key={index}>
                <div className="front" onClick={() => handleOnOffFront(gn)}>
                  {gn.singular}
                </div>
                {gn.isOpen && (
                  <div className="back">
                    <div className="singular">
                      {gn.article} {gn.singular}
                    </div>
                    <div className="plural">{gn.plural}</div>
                    {/* {!gn.isLearned && ( */}
                    <button
                      className="markAsLearned"
                      onClick={() => handleMarkAsLearnedClick(gn)}
                    >
                      Mark as learned
                    </button>
                  </div>
                )}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default App;
