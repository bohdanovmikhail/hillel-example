import * as types from './actionTypes';

export const increment = () => ({
  type: types.COUNTER_INCREMENT,
});

export const decrement = () => ({
  type: types.COUNTER_DECREMENT,
});

export const reset = () => ({
  type: types.COUNTER_RESET,
});

export const set = (value) => ({
  type: types.COUNTER_SET,
  payload: value,
});
