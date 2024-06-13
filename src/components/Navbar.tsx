import { NavLink } from "react-router-dom"
import "./../styles/Navbar.scss"

export const Navbar = () =>{
    return <>
    <div className="navBar">
        
        <div className="nav-icon"><img src="/public/img/giraffe-pic.png"/></div>
        <h3>The Zoo</h3>
    <NavLink to={"/home"}>Hem</NavLink>
    <NavLink to={"/animals"}>Dina Djur</NavLink>
    </div>
    
    </>
}