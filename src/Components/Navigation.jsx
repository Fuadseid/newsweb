import { NavLink } from "react-router-dom"

function Navigation() {
    return (
        <div>
           <NavLink to ='/'>Home</NavLink>
           <NavLink to ='/favorite'>Favorite</NavLink>
           <NavLink to='/profile'>Profile</NavLink> 
        </div>
    )
}

export default Navigation
