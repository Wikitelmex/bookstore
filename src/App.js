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
        <div className="m-3">

          <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
            <div className="container-fluid ms-5">

              <Link className="navbar-brand text-primary h1" to="/">
                <h3 className='fw-bold mt-1'>
                  Bookstore CMS
                </h3>
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse mb-2 ms-auto" id="navbarNavAltMarkup">
                <div className="navbar-nav me-auto text-light">
                  <Link to="/" className="nav-link">Books</Link>
                  <Link to="/categories" className="nav-link">Categories</Link>
                </div>
                <div className="navbar-nav ms-auto me-4 text-primary">
                  <h2 class="bi bi-person-circle"></h2>
                </div>
              </div>
            </div>
          </nav>

          <br />
          <br />
          <br />
          <br />
          <div>
            <Switch className="bg-dark">
              <Route path="/categories">
                <Categories />
              </Route>
              <Route path="/">
                <Books />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
