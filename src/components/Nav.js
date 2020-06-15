import React from 'react';
import { useHistory } from 'react-router-dom';

const Nav = (props) => {

  const history = useHistory();

  const handleClick = path => {
    history.push(`/search/${path}`);
    props.onSearch(path);
  }

  return (
    <nav className="main-nav">
      <ul>
        <li style={navLinkStyles} onClick={() => handleClick("forests")}>Forests</li>
        <li style={navLinkStyles} onClick={() => handleClick("mountains")}>Mountains</li>
        <li style={navLinkStyles} onClick={() => handleClick("ocean")}>Ocean</li>
      </ul>    
    </nav>
  );
}

const navLinkStyles = {
  display: 'block',
  background: '#438bbd',
  borderRadius: '3px',
  padding: '5px',
  color: '#fff',
  cursor: 'pointer',
};

export default Nav;