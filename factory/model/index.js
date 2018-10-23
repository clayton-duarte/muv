// IMPORTS
import { string, bool } from 'prop-types';
import styled from 'styled-components';
import React from 'react';

// STYLES

const commonStyles = ({
  transform,
  margin,
  strong,
  align,
  color,
}) => (`
font-weight: ${(strong ? 'bold' : 'inherit')};
text-transform: ${transform};
font-family: sans-serif;
text-align: ${align};
margin: ${margin};
color: ${color};
`);

export const P = styled.p`
${props => commonStyles(props)}
font-size: 1rem;
`;

export const Span = styled.span`
${props => commonStyles(props)}
font-size: 1rem;
`;

export const H1 = styled.h1`
${props => commonStyles(props)}
font-size: 2.5rem;
`;

export const H2 = styled.h2`
${props => commonStyles(props)}
font-size: 1.5rem;
`;

export const H3 = styled.h3`
${props => commonStyles(props)}
font-size: 1.25rem;
`;

export const H4 = styled.h4`
${props => commonStyles(props)}
font-size: 1rem;
`;

export const H5 = styled.h5`
${props => commonStyles(props)}
font-size: .9rem;
`;

export const H6 = styled.h6`
${props => commonStyles(props)}
font-size: .825rem;
`;

// COMPONENT
const Text = ({ type, strong, ...props }) => {
  switch (type) {
    case 'span':
      return <Span strong={strong} {...props} />;
    case 'h1':
      return <H1 strong={!strong} {...props} />;
    case 'h2':
      return <H2 strong={!strong} {...props} />;
    case 'h3':
      return <H3 strong={!strong} {...props} />;
    case 'h4':
      return <H4 strong={!strong} {...props} />;
    case 'h5':
      return <H5 strong={!strong} {...props} />;
    case 'h6':
      return <H6 strong={!strong} {...props} />;
    default:
      return <P strong={strong} {...props} />;
  }
};

// DOCUMENTATION
Text.propTypes = {
  /** accepts only text as children */
  children: string,
  /** sets color of the text as the color prop */
  color: string,
  /** sets text-transform value */
  transform: string,
  /** sets font-weight as bold */
  strong: bool,
  /** sets the margins */
  margin: string,
  /** sets the text-align */
  align: string,
  /** sets the heading hierarch */
  type: string,
};

Text.defaultProps = {
  children: 'default',
  transform: 'normal',
  margin: '0 0 0 0',
  color: '#0082c8',
  strong: false,
  align: 'left',
  type: 0,
};

// EXPORT
export default Text;
