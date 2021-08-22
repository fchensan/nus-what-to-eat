function App() {
  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="w-full mx-auto">
        <p className="text-center text-2xl">
          Randomly pick a canteen on campus
        </p>
        <div className="px-3">
          <button className="w-full my-3 py-2 bg-yellow-400 hover:bg-yellow-500 text-white rounded">
            Start
          </button>
        </div>  
      </div>
    </div>
  );
}

export default App;
