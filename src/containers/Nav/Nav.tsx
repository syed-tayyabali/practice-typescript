import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
    const style = {
        color: 'white'
    }
    
    return (
        <nav>
            <h3>LOGO</h3>
            <ul className='nav-links'>
                <Link style={style} to='/'>
                    <li> Home </li>
                </Link>
                <Link style={style} to='/DepositWithdraw'>
                    <li> Deposit / Withdraw </li>
                </Link>
                <Link style={style} to='/AccountName'>
                    <li> Account Name </li>
                </Link>
                <Link style={style} to='/Shop'>
                    <li> shop </li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav