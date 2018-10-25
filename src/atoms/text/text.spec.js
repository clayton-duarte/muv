import React from 'react';

import Component from '.';

it('should render a component', () => {
  const wrapper = shallow(
    <Component />,
  ).dive();
  expect(wrapper).toMatchSnapshot();
});

it('should render a component with a prop', () => {
  const wrapper = shallow(
    <Component strong />,
  ).dive();
  expect(wrapper).toMatchSnapshot();
});