import React from "react"
import './FriendsItem.sass'
import {NavLink} from "react-router-dom";

const FriendsItem = ({img, name, id}) => {
    return (
        <li className="friends__item">
            <NavLink to={"/dialogs/"+id}>
                <img src={img} alt="" className="friends__item-img"/>
                <span>{name}</span>
            </NavLink>
        </li>
    )
}

export default FriendsItem