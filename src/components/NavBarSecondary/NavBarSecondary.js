import React from 'react'
import IconsNavBar from './IconsNavBar'

import "./NavBarSecondary.scss"

export default function NavBarSecondary(props) {
    console.log(props);
    return (
        <div className="nav-bar">
            <IconsNavBar />
        </div>
    )
}
