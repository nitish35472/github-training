import React from 'react'
import { Link } from "react-router-dom";

function Home() {
    return (
        <>

            <li>
                {/* <Link to="Register">
                    Register</Link> */}
                <Link to="Register">
                    <button type="button">
                        Register
                    </button>
                </Link>
            </li>
            <li>
                {/* <Link to="Data">Data</Link> */}
                <Link to="Data">
                    <button type="button">
                        Data
                    </button>
                </Link>
            </li>
        </>
    )
}

export default Home
