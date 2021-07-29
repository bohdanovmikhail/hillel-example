import * as types from './actionTypes';

// Increment action
export const increment = () => ({
  type: types.COUNTER_INCREMENT,
});

export type IIncrementActionCreator = typeof increment;
export type IIncrementAction = ReturnType<IIncrementActionCreator>;

// Decrement action
export const decrement = () => ({
  type: types.COUNTER_DECREMENT,
});

export type IDecrementActionCreator = typeof decrement;
export type IDecrementAction = ReturnType<IDecrementActionCreator>;

// Reset action
export const reset = () => ({
  type: types.COUNTER_RESET,
});

export type IResetActionCreator = typeof reset;
export type IResetAction = ReturnType<IResetActionCreator>;

// Set action
export const set = (value: number) => ({
  type: types.COUNTER_SET,
  payload: value,
});

export type ISetActionCreator = typeof set;
export type ISetAction = ReturnType<ISetActionCreator>;

// Common actions
export type IActions = IIncrementAction | IDecrementAction | IResetAction | ISetAction;
