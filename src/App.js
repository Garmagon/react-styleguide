import { Route, Switch } from 'react-router-dom';

import Documentation from 'containers/pages/Documentation'
import Welcome from 'containers/pages/Welcome'

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
