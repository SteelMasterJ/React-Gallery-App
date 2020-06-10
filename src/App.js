import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import axios from 'axios';
import apikey from './config';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';

class App extends Component {

  constructor() {
    super();
    this.state = {
      pictures: [],
      loading: true
    };
  } 

  componentDidMount() {
    let query = 'cats';
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          pictures: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  performSearch = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          pictures: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    console.log(this.state.pictures);
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm onSearch={this.performSearch} />
          <Nav />
          {/* <Switch>
            <Route path="/forests" render={ () => <PhotoContainer query='forests' /> } />
            <Route path="/mountains" render={ () => <PhotoContainer query='mountains' /> } />
            <Route path="/ocean" render={ () => <PhotoContainer query='ocean' /> } />
          </Switch> */}
          <PhotoContainer data={this.state.pictures} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
