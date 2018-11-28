import React, { Component } from 'react';
import { node } from 'prop-types';

import Badge from '../../../atoms/badge';
import Fab from '../../../atoms/fab';
import BotContext from '../context';

class BotFab extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props;
    return (
      <Fab onClick={this.context.toogleChat}>
        <span>
          <Badge>{this.context.newMessages}</Badge>
          {children}
        </span>
      </Fab>
    );
  }
}

BotFab.contextType = BotContext;

BotFab.propTypes = {
  children: node.isRequired,
};

export default BotFab;
