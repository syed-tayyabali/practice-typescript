import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchData, fetchItem } from '../../common/Shop/actions'
import { useSelector, useDispatch } from 'react-redux';
import { getItems } from '../../common/Shop/selectors'

const Shop = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(fetchData())
    }, [])

    const items = useSelector(getItems)

    const onClickItems = (id: string) => {
        dispatch(fetchItem(id))
        navigate(`/Shop/${id}`)
    }

    return (
        <>
            {
                items && items.map(item => (
                    <h2 key={item.id}>
                        <a href='javascript:void(0);' onClick={() => onClickItems(item.id)}>   
                            {item.name}
                        </a>
                    </h2>
                ))
            }
        </>
    )
}

export default Shop