import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import FileIcon from '../FileIcon';
import MenuToggle from './MenuToggle';
import Menu from './Menu';
import { condensed } from '../../lib/fonts';
import { primary } from '../../lib/colors';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  toggleMenu = e => {
    e.preventDefault();
    this.setState(prevState => ({ menuOpen: !prevState }));
  };

  render() {
    return (
      <nav className="flex">
        <MenuLink to="/">
          <FileIcon icon="logo" /> LEARN YOUR RULES
        </MenuLink>
        <MenuToggle toggleMenu={this.toggleMenu} />
        <Menu isOpen={this.state.menuOpen} />
      </nav>
    );
  }
}

export default withRouter(Nav);

const MenuLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  font-family: ${condensed};
  font-size: 6rem;
  font-weight: bold;
  color: ${primary};

  & svg {
    height: 32px;
    width: auto;
    margin-right: 3rem;
  }
`;
