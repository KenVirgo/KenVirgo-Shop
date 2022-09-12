
import '../styles/App.scss';
import Nav from './nav/Nav';
import Home from './homepage/Home';
function App() {
  return (
    <div className="App">

      <header className="App-header">
        <Nav />
        <Home />

      </header>
    </div>
  );
}

export default App;
