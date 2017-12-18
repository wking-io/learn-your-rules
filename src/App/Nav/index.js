import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import FileIcon from '../FileIcon';
import MenuToggle from './MenuToggle';
import Menu from './Menu';
import { condensed } from '../../lib/fonts';
import { primary } from '../../lib/colors';

class NavContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  toggleMenu = e => {
    this.setState(({ menuOpen }) => ({ menuOpen: !menuOpen }));
  };

  render() {
    const { menuOpen } = this.state;
    return (
      <Nav className="flex items-center justify-between">
        <MenuLink to="/" className="flex items-center">
          <FileIcon icon="logo" /> <span>LEARN YOUR RULES</span>
        </MenuLink>
        <MenuToggle toggleMenu={this.toggleMenu} isOpen={menuOpen} />
        <Menu isOpen={menuOpen} toggleMenu={this.toggleMenu} />
      </Nav>
    );
  }
}

export default withRouter(NavContainer);

const Nav = styled.nav`
  height: 8rem;
  padding: 4rem 0;
`;
const MenuLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  font-family: ${condensed};
  font-size: 5rem;
  font-weight: bold;
  color: ${primary};

  & svg {
    height: 6rem;
    width: auto;
    margin-right: 3rem;
  }
`;
