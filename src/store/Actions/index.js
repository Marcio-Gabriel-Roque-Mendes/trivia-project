import { LOGIN, SCORE } from './actionTypes';

export const login = (payload) => ({ type: LOGIN, value: payload });
export const score = (payload) => ({ type: SCORE, value: payload });

