// IMPORTS
import { node, objectOf, string, bool } from 'prop-types';
import styled from 'styled-components';
import React from 'react';

import themeDefault from '../../theme';

// STYLES
const StyledOverlay = styled.aside`
pointer-events: ${({ visible }) => (visible ? 'auto' : 'none')};
transition: ${({ theme }) => theme.transition.time};
background: ${({ theme }) => theme.color.overlay};
z-index: ${({ visible }) => (visible ? 999 : 0)};
opacity: ${({ visible }) => (visible ? 1 : 0)};
justify-content: center;
align-items: center;
position: fixed;
padding: 1rem;
display: flex;
bottom: 0;
right: 0;
left: 0;
top: 0;
`;

// COMPONENT
const Overlay = props => (
  <StyledOverlay {...props} />
);

// DOCUMENTATION
Overlay.propTypes = {
  /** accepts only valid react nodes as children */
  children: node,
  /** defines if the component is visible or not, useful to be controlled from parent */
  visible: bool,
  /** receive theme props from Theme Provider or default */
  theme: objectOf(objectOf(string)),
};

Overlay.defaultProps = {
  theme: themeDefault,
  visible: false,
  children: '',
};

// EXPORT
export default Overlay;