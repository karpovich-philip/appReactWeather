import React from 'react';
import {NavLink} from 'react-router-dom';

//function Nav(props) {
//  return (
//    <div>
//      <h2>Nav component</h2>
//      <NavLink to='/weather' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</NavLink>
//      <NavLink to='/about' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</NavLink>
//      <NavLink to='/examples' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</NavLink>
//    </div>
//  );
//}

let Nav = (props) => {
  return (
    <div>
      <h2>Nav component</h2>
      <NavLink to='/weather' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</NavLink>
      <NavLink to='/about' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</NavLink>
      <NavLink to='/examples' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</NavLink>
    </div>
  );
}

export default Nav;