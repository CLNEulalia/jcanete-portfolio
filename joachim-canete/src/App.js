import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home.jsx';
import Resume from './Components/Resume';
import Projects from './Components/Projects';
import Navigation from './Components/Navigation';


function App() {
  return (
    <div className="App">
        <Navigation/>
      <Switch>
        <Route exact path='/' render={() => <Home/>}/>
        <Route exact path='/projects' render={() => <Projects/>}/>
        <Route exact path='/resume' render={() => <Resume/>}/>
      </Switch>
    </div>
  );
}

export default App;