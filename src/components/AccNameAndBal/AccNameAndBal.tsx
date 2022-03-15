import React, { FC, ChangeEvent, MouseEvent } from 'react'

export interface AccNameAndBalProps {
    userAccName: string
    userAccBal: number
    handleClickEvent: (event: MouseEvent<HTMLButtonElement>) => void
    title: string
    inputAccName: string
    handleChangeEvent:  (event: ChangeEvent<HTMLInputElement>) => void
}

const AccNameAndBal: FC<AccNameAndBalProps> = ({
    userAccName,
    userAccBal,
    handleClickEvent,
    title,
    inputAccName,
    handleChangeEvent
}) => {

    return (
        <>
            <input type='text' value={inputAccName} placeholder='Name' onChange={handleChangeEvent} />
            <button onClick={handleClickEvent}> {title} </button> <br />
            {userAccName} balance is {userAccBal}
        </>
    )
}

export default AccNameAndBal