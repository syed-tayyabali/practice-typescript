import React, { useState } from 'react'
import AccNameAndBal from '../../components/AccNameAndBal/AccNameAndBal'
import { useDispatch, useSelector } from 'react-redux'
import { getName, getBalance } from '../../common/start/selectors'
import { nameChange } from '../../common/start/actions'

const AccName = () => {
    const dispatch = useDispatch()
    const name = useSelector(getName)
    const balance = useSelector(getBalance)

    const [accName, setAccName] = useState(name)

    const onNameChange = () => {
        dispatch(nameChange(accName))
    }

    return (
        <>
            <AccNameAndBal
                userAccName={name}
                userAccBal={balance}
                handleClickEvent={onNameChange}
                title='set Account Name'
                inputAccName={accName}
                handleChangeEvent={e => setAccName(e.target.value)}
            />
        </>
    )
}

export default AccName