import React from 'react';
import {Link} from 'react-router-dom';

import './header.css';

const Header = (props) => {
  return <header>
    <Link to="/">Todos</Link>
    <h1>TaskList</h1>
  </header>;
};

export default Header;
