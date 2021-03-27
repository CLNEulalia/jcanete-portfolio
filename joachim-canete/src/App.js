import './App.css';
import Home from './Components/Home.jsx';
import { Switch } from 'react-router-dom'
import Navigation from './Components/Navigation';

function App() {
  return (
    <div className="App">
      <Switch>
        <Navigation/>
      </Switch>
      <Home/>
    </div>
  );
}

export default App;
