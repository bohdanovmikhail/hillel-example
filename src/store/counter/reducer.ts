import * as types from './actionTypes';
import { IActions, ISetAction } from './actions';

const initialState: IState = {
  value: 0,
};

export default function reducer(state: IState = initialState, action: IActions) {
  switch (action.type) {
    case types.COUNTER_INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };

    case types.COUNTER_DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };

    case types.COUNTER_RESET:
      return {
        ...state,
        value: 0,
      };

    case types.COUNTER_SET:
      return {
        ...state,
        value: (action as ISetAction).payload,
      };

    default:
      return state;
  }
}

export interface IState {
  value: number;
}
