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
          src="https://www.youtube.com/embed/gNqyFbvlKeQ"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <button>
          <a href="spotify:album:3gHcrdGWylFztt37G64Gkp">
            Escuchala en Spotify
          </a>
        </button>
      </section>
    </div>
  );
}

export default App;
