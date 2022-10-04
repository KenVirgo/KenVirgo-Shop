
import '../styles/App.scss';
import Nav from './nav/Nav';
import Home from './homepage/Home';
import Metatag from 'react-meta-tags';
function App() {
  return (
    <div className="App">
      <Metatag>
        <title>Ken Virgo Shop</title>
      </Metatag>
      <header className="App-header">
        <Nav />
        <Home />

      </header>
    </div>
  );
}

export default App;
