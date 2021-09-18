import './StyleSheet.css';
import './App.css';
import Header from './Components/Header'
import Home from './Components/Home';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Character from './Components/Character';

const Navigation = () => {
  return(
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/character/:id">
        <Character/>
      </Route>
      <Route path="*">
        <h2>ERROR 404, Not found :/</h2>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Navigation/>
      </BrowserRouter>
    </div>
  );
}

export default App;
