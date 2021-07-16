import React from 'react'
import { BsList, BsPlus } from 'react-icons/bs'
import { BiCart, BiLogOutCircle } from 'react-icons/bi'
import '../Styles/navbar.css'
const Navbar = ({ url }) => {
    url =
        url ||
        'https://karateinthewoodlands.com/wp-content/uploads/2017/09/default-user-image.png'
    return (
        <header className="NavBar">
            <div
                style={{ backgroundImage: `url(${url})` }}
                className="userImg"
            ></div>
            <nav className="router">
                <div>
                    <BsList className="icon" />
                </div>
                <div>
                    <BiCart className="icon" />
                </div>
            </nav>
            <div className="addItem">
                <BsPlus className="icon" />
            </div>
        </header>
    )
}

export default Navbar
