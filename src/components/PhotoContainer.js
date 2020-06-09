import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const PhotoContainer = props => { 
  
  const results = props.data;
  let photos;
  if(results.length > 0) {
    photos = results.map(photo =>
      <Photo url={photo.images.url} key={photo.id}/>
    );
  } else {
    photos = <NotFound />
  }

  return(
    <div class="photo-container">
        <h2>Results</h2>
        <ul>
            {photos}
        </ul>
    </div>
  );
}

export default PhotoContainer;