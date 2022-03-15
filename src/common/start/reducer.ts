import { startState } from "./types";
import { CONSTANTS } from "./actions";

const initialState: startState = {
    accountName: 'TAYYAB',
    accountBal: 0,
}

export default function reducer(state = initialState, action: any): startState {
    switch (action.type) {
        case CONSTANTS.DEPOSITE:
            return {
                ...state,
                accountBal: action.payload as number
            }

        case CONSTANTS.WITHDRAW:
            return {
                ...state,
                accountBal: action.payload as number
            }

        case CONSTANTS.NAME:
            return {
                ...state,
                accountName: action.payload as string
            }

        default:
            return state
    }
}