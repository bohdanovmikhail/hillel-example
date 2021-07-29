import { AppBar, Toolbar } from '@material-ui/core';
import { PAGE_CONFIGS } from '../../../../configs';
import { NavLink } from 'react-router-dom';

export function RootHeader() {
  return (
    <AppBar position="static">
      <Toolbar>
        {PAGE_CONFIGS.map(example => (
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
  );
}
