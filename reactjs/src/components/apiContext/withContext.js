import React from 'react'
import {Context} from "./context"

export function withContext(Component) {
  return function WrapperComponent(props) {
      return (
          <Context.Consumer>
              {(state) => (<Component {...props} context={state} />)}
          </Context.Consumer>
      );
  };
}