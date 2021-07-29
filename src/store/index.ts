import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import rootReducer from './rootReducer';

const middleware = applyMiddleware(reduxThunk);

export default createStore(rootReducer, middleware);

export * from './IRootState.type';

export {
  actions as counterActions,
  selectors as counterSelectors,
} from './counter';
