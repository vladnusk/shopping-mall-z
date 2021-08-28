import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './components/Nav';
import FavoriteItems from './pages/FavoriteItems';
import ShoppingCart from './pages/ShoppingCart';
import Main from './pages/Main';
import './styles/app.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path='/favorites'>
            <FavoriteItems />
          </Route>
          <Route path='/cart'>
            <ShoppingCart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
