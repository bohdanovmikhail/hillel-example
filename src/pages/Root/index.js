import { Switch, Route, NavLink } from 'react-router-dom';
import { AppBar, Container, Toolbar } from '@material-ui/core';

import pageConfigs from './pageConfigs';
import './index.scss';

export default function Root() {
  return (
    <>
      <RootHeader />

      <Container className="container">
        <Switch>
          {pageConfigs.map(example => (
            <Route key={example.path} path={example.path} component={example.component} />
          ))}

          <Route path="/" exact>
            Вы не выбрали ни один пример
          </Route>
        </Switch>
      </Container>
    </>
  );
}

function RootHeader() {
  return (
    <AppBar position="static">
      <Toolbar>
        {pageConfigs.map(example => (
          <NavLink
            key={example.path}
            to={example.path}
            className="link"
            activeClassName="active"
          >
            {example.title}
          </NavLink>
        ))}
      </Toolbar>
    </AppBar>
  )
}
