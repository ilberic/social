import React from 'react'
import './Nav.sass'
import {NavLink} from "react-router-dom";
const Nav = () => {
    return (
        <nav className="nav">
            <ul className="nav-wrapper offset-lg-1">
                <li className="nav-item"><NavLink to="/profile">Моя страница</NavLink></li>
                <li className="nav-item"><NavLink to="/news">Новости</NavLink></li>
                <li className="nav-item"><NavLink to="/dialogs">Мои сообщения</NavLink></li>
                <li className="nav-item"><NavLink to="/groups">Группы</NavLink></li>
                <li className="nav-item"><NavLink to="/settings">Настройки</NavLink></li>
            </ul>
        </nav>
        
    )
}

export default Nav