
import './App.css';
import Header from './Header';
import Home from './Home';

function App() {
  return (
    // Css Classes are following BEM convention
    <div className="app">
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
