import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const NavBar = () => {
  const [isOpenToggle, setisOpenToggle] = useState({
    isOpen: false
  });

  const { isOpen } = isOpenToggle;

  const onToggle = e => {
    setisOpenToggle({ ...isOpenToggle, isOpen: !isOpen });
  };

  return (
    <div style={{ backgroundColor: 'rgb(251, 223, 216)' }}>
      <div style={{ maxWidth: '1400px', margin: 'auto' }}>
        <Navbar
          style={{ backgroundColor: 'rgb(251, 223, 216)' }}
          light
          expand='md'
        >
          <NavbarBrand style={{ color: 'grey' }} tag={Link} to='/'>
            Conov
          </NavbarBrand>
          <NavbarToggler onClick={onToggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink style={{ color: 'grey' }} tag={Link} to='/'>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{ color: 'grey' }} tag={Link} to='/portfolio'>
                  Portfolio
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{ color: 'grey' }} tag={Link} to='/contact'>
                  Contact Me
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default NavBar;
