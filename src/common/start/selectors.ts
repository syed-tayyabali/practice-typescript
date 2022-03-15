import { createSelector } from 'reselect'
import { ReduxState } from '../type'
import { startState } from './types'

export const getStart = (state: ReduxState): startState => state.start

export const getBalance = createSelector(
    getStart,
    ({ accountBal }) => accountBal
  )

  export const getName = createSelector(
    getStart,
    ({ accountName }) => accountName
  )