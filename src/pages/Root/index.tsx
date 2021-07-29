import { Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';

import { PAGE_CONFIGS } from '../../configs';

import { RootHeader } from './components/RootHeader';
import './index.scss';

export function Root() {
  return (
    <>
      <RootHeader />

      <Container className="container">
        <Switch>
          {PAGE_CONFIGS.map(example => (
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
