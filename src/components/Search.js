import React from 'react';
import PhotoContainer from './components/PhotoContainer';

class Search extends React.Component {

    performSearch = (query) => {

        let query = this.props.match.params.query;

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
        return (
            <PhotoContainer data={this.data.}/>
        );
    }
}