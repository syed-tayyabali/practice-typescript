import { ShopItem, item } from './types';

/**
 * @constants
 */

export const CONSTANTS = {
    SET_ITEMS: 'SET_ITEMS',
    SET_ITEM: 'SET_ITEM'
}

/**
 * @actions
 */

export const setItems = (payload?: ShopItem) => ({
    type: CONSTANTS.SET_ITEMS,
    payload
})

export const setItem = (payload?: item) => ({
    type: CONSTANTS.SET_ITEM,
    payload
})

/**
 * @thunk
 */

export const fetchData = () => async (dispatch: any) => {
    try {
        const response = await fetch('https://fortnite-api.com/v1/playlists')
        const respData = await response.json()
        dispatch(setItems(respData.data))
    } catch (e) {
        console.log(e)
    }
}

export const fetchItem = (id: string) => async (dispatch: any) => {
    try {
        const response = await fetch(`https://fortnite-api.com/v1/playlists/${id}`)
        const respData = await response.json()
        dispatch(setItem(respData.data))
    } catch (e) {
        console.log(e)
    }
}