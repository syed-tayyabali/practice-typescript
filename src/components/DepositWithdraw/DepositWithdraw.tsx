import React, { MouseEvent, ChangeEvent, FC } from 'react'

export interface DepositWithdrawProps {
    handleClickEvent: (event: MouseEvent<HTMLButtonElement>) => void
    handleChangeEvent: (event: ChangeEvent<HTMLInputElement>) => void
    inputValue: number
    inputPlaceholder: string
    title: string
    inputType: string
}

const DepositWithdraw: FC<DepositWithdrawProps> = ({
    handleClickEvent,
    handleChangeEvent,
    inputValue,
    inputPlaceholder,
    title,
    inputType
}) => {

    return (
        <>
            <input type={inputType} value={inputValue} placeholder={inputPlaceholder} onChange={handleChangeEvent} />
            <button onClick={handleClickEvent}> {title} </button> <br />
        </>
    )
}

export default DepositWithdraw