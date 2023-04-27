import React, { useState, useCallback } from "react";
import Joke from "./components/Joke";
import "./App.css";

function App() {
  const [joke, setJoke] = useState(null);

  const fetchJoke = useCallback(async () => {
    // Fetch a new joke here and update the joke state.
    // Replace the URL with the API endpoint you're using to fetch jokes.
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    setJoke(data.value);
  }, []);

  // Fetch a joke initially when the component mounts.
  React.useEffect(() => {
    fetchJoke();
  }, [fetchJoke]);

  return (
    <div className='App'>
      <h1 className='header-title'>Chuck Norris Joke App</h1>
      <Joke joke={joke} fetchJoke={fetchJoke} />
    </div>
  );
}

export default App;
