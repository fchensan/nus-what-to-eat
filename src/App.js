import { useState } from 'react';

function shuffle(array) {
  var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function App() {
  const [mode, setMode] = useState('main');

  const canteens = useState(
    shuffle(
      ['Finefood', 
      'Foodclique', 
      'Engineering', 
      'Yusof Ishak House',
      'Science',
      'Prince George\'s Park']
      )
  )
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleStart = () => {
    setMode('selected')
    setSelectedIndex((selectedIndex + 1) % canteens.length)
  }

  return (
    <div className="h-screen flex flex-col justify-center bg-red-700 text-white">
      { mode === 'main' && <div className="w-full md:w-1/2 mx-auto">
        <h1 className="text-center text-md font-bold">NUS what to eat?</h1>
        <p className="text-center text-2xl">
          Randomly pick a canteen on campus
        </p>
        <div className="px-3">
          <button className="w-full my-3 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded" onClick={handleStart}>
            Start
          </button>
        </div>
      </div> }
      { mode === 'selected' && 
        <>
          <p className="text-center text-3xl">
            <b>{canteens[selectedIndex]}</b>
          </p>
          <div className="mx-auto px-3">
            <button className="my-3 py-2 px-2 border border-yellow-500 hover:bg-yellow-700 rounded" onClick={handleStart}>
              Pick another
            </button>
          </div>
        </>
      }
    </div>
  );
}

export default App;
