import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>The song of the day</p>
      </header>
      <section>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/wuJIqmha2Hk"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <button>
          <a href="spotify:track:2RlgNHKcydI9sayD2Df2xp">
            Escuchala en Spotify
          </a>
        </button>
      </section>
    </div>
  );
}

export default App;
