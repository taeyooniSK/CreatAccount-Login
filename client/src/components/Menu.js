import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div id='navigation'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/signup'>Signup</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
