import React from 'react'
import logo from '../assets/foundation-logo.png'
import './navigation.css'

function Navigation() {
    return (
        <div class="top-bar" id="responsive-menu">
            <div class="top-bar-left">
                <ul class="dropdown menu" data-dropdown-menu>
                    <li class="menu-text">
                            <img 
                            src={logo}
                            width="10" 
                            />
                    </li>
                    <li><a href="#">Main</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div class="top-bar-right">
                <ul class="menu">
                    <li><input type="search" placeholder="Search" /></li>
                    <li><button type="button" class="button"><i class="fas fa-search"></i></button></li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation
