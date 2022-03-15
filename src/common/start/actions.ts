import { getBalance } from './selectors'

/**
 * @constants
 */

export const CONSTANTS = {
    DEPOSITE: 'DEPOSITE',
    WITHDRAW: 'WITHDRAW',
    NAME: 'NAME'
}

/**
 * @actions
 */

export const setDeposit = (payload?: number) => ({
    type: CONSTANTS.DEPOSITE,
    payload
})

export const setWithdraw = (payload?: number) => ({
    type: CONSTANTS.DEPOSITE,
    payload
})

export const setName = (payload?: string) => ({
    type: CONSTANTS.NAME,
    payload
})

/**
 * @thunk
 */

export const depositeAmmount = (value: number) => (dispatch: any, getState: any) => {
    const balance = getBalance(getState())
    let newBal = balance + value
    dispatch(setDeposit(newBal))
}

export const withdrawAmmount = (value: number) => (dispatch: any, getState: any) => {
    const balance = getBalance(getState())
    let newBal = balance - value
    dispatch(setWithdraw(newBal))
}

export const nameChange = (value: string) => (dispatch: any, getState: any) => {
    dispatch(setName(value))
}