import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            {/* <Link to="/Edit">Edit</Link> */}
            <Link to="/Data">Data</Link>
        </div>
    )
}
export default Navbar
