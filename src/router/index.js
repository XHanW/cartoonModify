import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from 'view';
import NoMatch from 'view/NoMatch';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={App} />
        <Route component={NoMatch} />
      </Switch>
    );
  }
}

export default Routes;
