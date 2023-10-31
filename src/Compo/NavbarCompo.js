import React from 'react'
import { NavLink } from 'react-router-dom'

function NavbarCompo() {
    return (
        <div className='navbar' id='navbarid'>
            <div className="navflex">
                <NavLink className='navlink' style={({ isActive }) => ({ color: isActive ? "grey" : "" })} to="/" ><h3>Home</h3></NavLink>
                <NavLink className='navlink' style={({ isActive }) => ({ color: isActive ? "grey" : "" })} to="/Bollywood"><h3>Bollywood</h3></NavLink>
                <NavLink className='navlink' style={({ isActive }) => ({ color: isActive ? "grey" : "" })} to="/Technology"><h3>Technology</h3></NavLink>
                <NavLink className='navlink' style={({ isActive }) => ({ color: isActive ? "grey" : "" })} to="/Hollywood"><h3>Hollywood</h3></NavLink>
                <NavLink className='navlink' style={({ isActive }) => ({ color: isActive ? "grey" : "" })} to="/Fitness"><h3>Fitness</h3></NavLink>
                <NavLink className='navlink' style={({ isActive }) => ({ color: isActive ? "grey" : "" })} to="/Food"><h3>Food</h3></NavLink>
            </div>
        </div >
    )
}

export default NavbarCompo