import React from 'react'
import Cart from '../Containers/Cart'
import Navbar from '../Containers/Navbar'
import '../Styles/home.css'
const Home = () => {
    return (
        <div className="Home">
            <div className="left">
                <Navbar />
            </div>
            <div className="right">
                <Cart />
            </div>
        </div>
    )
}

export default Home
