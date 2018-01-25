import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import messages from './messages';

class Greet extends Component {
  render() {
    return (
      <div>
        {this.props.intl.formatMessage(messages.greet, { name: 'MichaelHsu' })}
      </div>
    );
  }
}

export default injectIntl(Greet);
