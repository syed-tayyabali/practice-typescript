import { ShopState, ShopItem, item } from './types';
import { CONSTANTS } from './actions'

const initialState: ShopState = {
    items: [],
    item: {
        name: '',
        description: '',
        images: {
            showcase: ''
        }
    }
}

export default function reducer(state = initialState, action: any): ShopState {
    switch (action.type) {
        case CONSTANTS.SET_ITEMS:
            return {
                ...state,
                items: action.payload as ShopItem[]
            }

        case CONSTANTS.SET_ITEM:
            return {
                ...state,
                item: {
                    ...state.item,
                    ...action.payload
                }
            }
        default:
            return state
    }
} 