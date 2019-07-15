import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import MainPage from './containers/MainPage';
import AddArticle from './containers/AddArticle';
import ViewArticle from './containers/ViewArticle';
import './App.scss';

const App = () => (
  <div className="container-fluid">
    <div className="row py-5">
      <div className="col-1 col-lg" />
      <div className="col-10 col-lg-7">
        <Router>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="articles" />} />
            <Route exact path="/articles" component={MainPage} />
            <Route path="/articles/new" component={AddArticle} />
            <Route
              path="/articles/:id"
              render={routeProps => (
                <ViewArticle {...routeProps} id={routeProps.match.params.id} />
              )}
            />
          </Switch>
        </Router>
      </div>
      <div className="col-1 col-lg" />
    </div>
  </div>
);

export default App;
