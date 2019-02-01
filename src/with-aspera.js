import React, { Component } from 'react';
import { asperaWeb, asperaInstaller, config } from './react-aspera-connect';

export const withAspera = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (<WrappedComponent
        aspera={{
          web: asperaWeb,
          installer: asperaInstaller,
          config: config
        }}

        {...this.props}
      />);
    }
  }
  
}