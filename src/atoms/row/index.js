// IMPORTS
import { node, string, number } from 'prop-types';
import styled from 'styled-components';
import React from 'react';

import themeDefault from '../../theme';
import Container from '../container';

// STYLES
const StyledRow = styled(Container)`
justify-content: ${({ justify }) => justify};
align-items: ${({ align }) => align};
margin: ${({ margin }) => margin};
flex-grow: ${({ grow }) => grow};
flex-direction: row;
max-width: unset;
flex-shrink: 1;
display: flex;
`;

StyledRow.defaultProps = {
  theme: themeDefault,
};

// COMPONENT
const Row = ({ children, ...props }) => (
  <StyledRow {...props}>{children}</StyledRow>
);

// DOCUMENTATION
Row.propTypes = {
  /** accepts only valid react nodes as children */
  children: node,
  /** sets flex-grow using a "inline style" logic */
  grow: number,
  /** sets justify-content using a "inline style" logic */
  justify: string,
  /** sets align-items using a "inline style" logic */
  align: string,
  /** sets margin using a "inline style" logic */
  margin: string,
};

Row.defaultProps = {
  justify: 'stretch',
  align: 'stretch',
  children: 'row',
  margin: '0',
  grow: 1,
};

// EXPORT
export default Row;
