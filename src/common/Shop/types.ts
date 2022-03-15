
export type ShopItem = {
    name: string
    id: string
}

export type item = {
    name: string
    description: string
    images: {
        showcase: string
    }
}

export interface ShopState {
    items: ShopItem[]
    item: Partial<singleItem>
}

export interface singleItem {
    name: string
    description: string
    images: {
        showcase: string
    }
}