import React from 'react';
import { useLocation } from 'react-router-dom';
import Photo from './Photo';
import NotFound from './NotFound';

const PhotoContainer = (props) => { 
  const location = useLocation();

  React.useEffect( () => {
    console.log('mounted in container, location = ', location.pathname);
    (location.pathname === '/') ? props.performSearch('cats') : props.performSearch(location.pathname.slice(8));
  }, [location.pathname, props]);

  const results = props.data;
  let photos;
  if(results.length > 0) {
    photos = results.map(photo =>
      <Photo 
      farm={photo.farm} 
      key={photo.id}
      id={photo.id}
      server={photo.server}
      secret={photo.secret}
      title={photo.title}
      />
    );
  } else {
    photos = <NotFound />
  }

  return(
    <div className="photo-container">
      <h2>Results</h2>
        {
          (props.loading)
          ? <p>loading...</p>
          : ( <ul>
                  {photos}
              </ul>)
        }
    </div>
  );
}

export default PhotoContainer;