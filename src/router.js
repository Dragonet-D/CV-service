import React from 'react';
import { router, dynamic } from 'dva';
import MessageCenter from 'components/MessageCenter';
import CodeLoading from 'components/Loading/CodeLoading';
import materialKeys from './utils/materialKeys';
import { getRouterData } from './commons/router';
import IVHTheme from './components/Theme';

const { Route, Switch, Router, Redirect } = router;

// import { dynamic } from 'dva';
dynamic.setDefaultLoadingComponent(CodeLoading);

function RouterConfig({ history, app }) {
  const routerData = getRouterData(app);
  const Index = routerData['/'].component;
  const ExceptionLayout = routerData['/exception'].component;
  const { pathname } = history.location;
  const paths = Object.keys(routerData);
  return (
    <IVHTheme>
      <Router history={history}>
        <Switch>
          {!paths.some(item => item.indexOf(pathname) === 0) && (
            <Redirect from={pathname} to="/exception/404" />
          )}
          <Route path="/exception" component={ExceptionLayout} />
          <Route
            path="/"
            render={props => <Index {...props} />}
            authority={Object.values(materialKeys)}
            redirectPath="/home"
          />
        </Switch>
      </Router>
      <MessageCenter />
    </IVHTheme>
  );
}

export default RouterConfig;
