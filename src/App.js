import { Route, Switch } from 'react-router-dom';

import Documentation from 'containers/Documentation'
import Welcome from 'containers/Welcome'

const app = () => {
  return (
    <div>
      <Switch>
        <Route path="/documentation" component={Documentation} />
        <Route path="/" component={Welcome} />
      </Switch>
    </div>
  );
}

export default app;
