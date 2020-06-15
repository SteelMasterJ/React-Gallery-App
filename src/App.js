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
      loading: true,
      searchWord: ''
    };
  } 

  componentDidMount() {
    let query = 'cats';
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          pictures: response.data.photos.photo,
          loading: false,
          searchWord: query
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  performSearch = (query) => {
    console.log(query);
    console.log('performSearch has fired');
    if(this.state.searchWord !== query) {
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
        .then(response => {
          this.setState({
            pictures: response.data.photos.photo,
            loading: false,
            searchWord: query
          });
        })
        .catch(error => {
          console.log('Error fetching and parsing data', error);
        });
    }
  }

  render() {
    console.log(this.state.pictures);
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm onSearch={this.performSearch} />
          <Nav onSearch={this.performSearch} />
          <Switch>
            <Route path="/search/:id" render={ () => <PhotoContainer data={this.state.pictures} performSearch={this.performSearch} /> } />
            <Route exact path="/forests" render={ () => <PhotoContainer data={this.state.pictures} /> } />
            <Route exact path="/mountains" render={ () => <PhotoContainer data={this.state.pictures} /> } />
            <Route exact path="/ocean" render={ () => <PhotoContainer data={this.state.pictures} /> } />
            <PhotoContainer data={this.state.pictures} />
          </Switch>          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
