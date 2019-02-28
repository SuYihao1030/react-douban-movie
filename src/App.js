import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import { Now, Result, Detail } from './pages';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            <Route 
              path='/'
              exact
              component={Now}
            />
            <Route
              path='/result/:key'
              exact
              component={Result}
            />
            <Route 
              path='/detail/:id'
              exact
              component={Detail}
            />
          </Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
