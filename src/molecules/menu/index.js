// IMPORTS
import { arrayOf, shape, string, func } from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

import Container from '../../atoms/container';
import themeDefault from '../../theme';
import MenuButton from '../menuButton';
import Link from '../../atoms/link';

// STYLES
const StyledMenu = styled.nav`
all: unset;
pointer-events: ${({ open }) => (open ? 'auto' : 'none')};
transition: ${({ theme }) => theme.transition.time};
background: ${({ theme }) => theme.color.lightGray};
box-shadow: ${({ theme }) => theme.shape.float};
z-index: ${({ open }) => (open ? 99 : 0)};
opacity: ${({ open }) => (open ? 1 : 0)};
top: calc(100% + 1rem);
position: absolute;
left: 0;
`;

// THEME DEFAULT
StyledMenu.defaultProps = {
  theme: themeDefault,
};

// COMPONENT
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.toogleMenu = () => {
      this.setState(({ open }) => ({ open: !open }));
    };
  }

  render() {
    const { links, menuButton, router } = this.props;
    const { open } = this.state;
    return (
      <Container>
        {menuButton({ open, onClick: this.toogleMenu })}
        <StyledMenu open={open}>
          <Container hasContent minWidth="320px">
            {links.map(({ title, path }, index) => (
              router
                ? <Link key={`menu-link-${title}}-${index}`} onClick={() => router.push(path)}>{title}</Link>
                : <Link key={`menu-link-${title}}-${index}`} href={path}>{title}</Link>
            ))}
          </Container>
        </StyledMenu>
      </Container>
    );
  }
}

// DOCUMENTATION
Menu.propTypes = {
  /** a list of links to be rendered on the menu */
  links: arrayOf(shape({ title: string, path: string })),
  /** a component to overwright the default menu button */
  menuButton: func,
};

Menu.defaultProps = {
  menuButton: props => <MenuButton {...props} />,
  links: [
    { title: 'Home', path: '/' },
  ],
};

// EXPORT
export default Menu;
