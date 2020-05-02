import React from 'react';
import { NavLink } from 'react-router-dom';



export default function Navbar() {
    return (
        <nav>

            <ul id="navBar" >

                <li className= "navLinks"><NavLink to="/">
                    What is AI?
                </NavLink></li>

                <li><NavLink className= "navLinks" to="/ai-ethics">
                    AI Ethics/Morals
                </NavLink></li>

                <li><NavLink className= "navLinks" to="/ai-governing">
                    Governing AI: Do they have rights?
                </NavLink></li>

            </ul>
            
        </nav>
    )
}