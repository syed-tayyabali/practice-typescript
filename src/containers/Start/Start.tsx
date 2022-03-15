import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getBalance } from '../../common/start/selectors'
import { depositeAmmount, withdrawAmmount } from '../../common/start/actions'
import DepositWithdraw from '../../components/DepositWithdraw/DepositWithdraw'

const Start = () => {
    const dispatch = useDispatch()
    const balance = useSelector(getBalance)

    const [depositeValue, setDepositeValue] = useState(Number)
    const [withdrawValue, setWithdrawValue] = useState(Number)

    return (
        <>
            <DepositWithdraw
                title='Deposite'
                inputPlaceholder='Deposite'
                inputValue={depositeValue}
                handleChangeEvent={e => setDepositeValue(parseInt(e.target.value))}
                handleClickEvent={() => dispatch(depositeAmmount(depositeValue))}
                inputType='number'
            />
            <DepositWithdraw
                title='Withdraw'
                inputPlaceholder='withdraw'
                inputValue={withdrawValue}
                handleChangeEvent={e => setWithdrawValue(parseInt(e.target.value))}
                handleClickEvent={() => dispatch(withdrawAmmount(withdrawValue))}
                inputType='number'
            />
            Your remaining balance is {balance}
        </>
    );
}

export default Start