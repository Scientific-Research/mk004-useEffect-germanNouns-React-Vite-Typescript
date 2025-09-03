// import './App.css';
import { useEffect } from 'react';
import axios from 'axios';

const germanNounsURL =
  'https://edwardtanguay.vercel.app/share/germanNouns.json';

function App() {
  useEffect(() => {
    (async () => {
      const response = await axios(germanNounsURL);
      const germanNouns = response.data;
      console.log(germanNouns);
    })();
  }, []);

  return (
    <div className="App">
      <h1>useEffect-germanNouns-React-Vite-Typescript</h1>
      <h3>Welcome to this Site.</h3>

      <p>There are {} germnan Nouns!</p>
    </div>
  );
}

export default App;
