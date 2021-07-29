import { IRootState } from '../IRootState.type';
import { IState } from './reducer';

export const get = (state: IRootState): IState => state.counter;
export const getValue = (state: IRootState): number => get(state).value;
