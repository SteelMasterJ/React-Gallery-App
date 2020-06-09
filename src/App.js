import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import apikey from './config';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <SearchForm />
      <Nav />
      <Switch>
        <Route path="/cats" render={ () => <PhotoContainer query='cats' /> } />
        <Route path="/dogs" render={ () => <PhotoContainer query='dogs' /> } />
        <Route path="/computers" render={ () => <PhotoContainer query='computers' /> } />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
