import React from 'react';

// routing
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';

// components import
import Books from './components/Books';
import Categories from './components/Categories';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Books</Link>
              </li>
              <li>
                <Link to="/categories">Categories</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/categories">
              <Categories />
            </Route>
            <Route path="/">
              <Books />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
