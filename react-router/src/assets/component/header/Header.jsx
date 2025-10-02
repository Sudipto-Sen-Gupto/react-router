import React from 'react';
import { Link, NavLink } from 'react-router';
import '../header/root.css'
const Header = () => {
    return (
        <div>
            <h1>This is header</h1>
            <div style={{padding:"10px"}}>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='about'>About</NavLink>
          <NavLink to='laptops'>Laptop</NavLink>
          <NavLink to='user'>User</NavLink>
           <NavLink to='user2'>User2</NavLink>
           {/* <NavLink to='feature'>Feature</NavLink> */}
           </div>
        </div>
    );
};

export default Header;