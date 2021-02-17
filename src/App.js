import logo from "./spotify.ico";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>The song of the day</h2>
      </header>
      <section>
        <h3>18 / febrero / 2021</h3>
        <iframe
          className="Song-youtube-iframe"
          src="https://www.youtube.com/embed/wuJIqmha2Hk"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <img src={logo} className="Spotify-icon" alt="listen on spotiyf" />
        <a href="spotify:track:2RlgNHKcydI9sayD2Df2xp">Escuchala en Spotify</a>
      </section>
    </div>
  );
}

export default App;
