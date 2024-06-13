import { NavLink } from "react-router-dom"

export const Navbar = () =>{
    return <>
    <div className="navBar">
    <NavLink to={"/"}>Hem</NavLink>
    <NavLink to={"/animals"}>Dina Djur</NavLink>
    </div>
    
    </>
}