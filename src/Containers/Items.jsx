import React from 'react'
import { BsSearch, BsPlus } from 'react-icons/bs'
import '../Styles/items.css'
const Items = () => {
    const items = [
        {
            name: 'Manzana',
            price: 10,
            description: 'Manzana Roja',
            type: 'Fruta',
        },
        {
            name: 'Pollo',
            price: 100,
            description: 'Pollo',
            type: 'Carne Blanca',
        },
    ]
    return (
        <div className="Items">
            <div className="itemsTop">
                <div className="inputContainer">
                    <BsSearch className="searchIcon" />
                    <input type="text" placeholder="find items..." />
                </div>
            </div>
            <div className="itemsContainer">
                {items.map((item) => (
                    <div className="item">
                        <div>{item.name}</div>
                        <BsPlus className="itemIcon" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Items
