import * as types from './actionTypes';

const initialState = {
  value: 0,
};

export default function reducer(state = initialState, action) {
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
        value: action.payload,
      };

    default:
      return state;
  }
}
