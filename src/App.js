import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [advice, setAdvice] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    await fetch("https://api.adviceslip.com/advice", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result.slip.advice);
        setAdvice(result.slip.advice);
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Get a Random Advice 🔥</h1>
        {loading ? <p>loading...</p> : <p>{advice}</p>}

        <button
          className="btn"
          onClick={() => {
            fetchData();
          }}
        >
          Get another advice
        </button>
      </header>
    </div>
  );
}

export default App;
