import { createSelector } from 'reselect'
import { ReduxState } from '../type'
import { ShopState } from './types'

export const getShops = (state: ReduxState): ShopState => state.shop

export const getItems = createSelector(
    getShops,
    ({ items }) => items
)

export const getItem = createSelector(
    getShops,
    ({ item }) => item
)