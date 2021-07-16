import React, { useState } from 'react'
import '../Styles/cart.css'
import { BsSearch, BsFillCaretLeftFill } from 'react-icons/bs'
const Cart = () => {
    const [open, setOpen] = useState(true)
    const hideCart = () => {
        setOpen(!open)
    }
    return (
        <div className={open ? 'cartContainer' : 'cartContainer hide'}>
            <div className="cart">
                <h2>Cart</h2>
                <div className="items container">papa pepo</div>

                <div className="inputContainer">
                    <BsSearch className="searchIcon" />
                    <input type="text" placeholder="find cart's items..." />
                </div>
            </div>
        </div>
    )
}

export default Cart
