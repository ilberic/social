import React from 'react'
import './Header.sass'
const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="row">
                        <img src="https://image.flaticon.com/icons/svg/145/145813.svg" alt="logo" className="header__logo offset-lg-1"/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header