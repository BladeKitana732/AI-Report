import React from 'react';
import {NavLink} from 'react-router-dom'


export default function Navbar() {
    return (
        <nav>

            <ul id="navLinks" >

                <li><NavLink to="/">
                    What is AI?
                </NavLink></li>

                <li><NavLink to="/ai-ethics">
                    AI Ethics/Morals
                </NavLink></li>

                <li><NavLink to="/ai-governing">
                    Governing AI: Do they have rights?
                </NavLink></li>

            </ul>
            
        </nav>
    )
}