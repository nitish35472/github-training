import React from 'react'
import { useState } from "react";
import { addUser } from "../Services/Api";
// import { unstable_HistoryRouter } from "react-router-dom";
import { useNavigate } from "react-router";
import { toast } from 'react-toastify';
function Register() {
    const Navigate = useNavigate();
    // let history = unstable_HistoryRouter();
    const initialvalue = {
        name: '',
        username: '',
        email: '',
        address: '',
        phone: '',
        website: ''
    }
    const [user, setUser] = useState(initialvalue);
    const { name, username, email, address, phone, website } = user;
    const onChangeFunction = (e) => {
        console.log(e);
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const onSubmitFunction = async () => {
        await addUser(user).then((res) => console.log("rrrr", res)).catch((err) => console.log("err"));
        // history.push("/")
        Navigate("/Data")

        toast(' Data saved successfully', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    return (
        <center>
            <table border="5">
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td><input type="text" name="name" onChange={(e) => onChangeFunction(e)} value={name}
                        />
                        </td>
                    </tr>
                    <tr>
                        <td>Username</td>
                        <td><input type="text" name="username" id="username" onChange={(e) => onChangeFunction(e)} value={username}
                        /></td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td> <input type="text" name="email" id="email" onChange={(e) => onChangeFunction(e)} value={email}
                        /></td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td> <input type="text" name="address" id="address" onChange={(e) => onChangeFunction(e)} value={address}
                        /></td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td> <input type="text" name="phone" id="phone" onChange={(e) => onChangeFunction(e)} value={phone}
                        /></td>
                    </tr>
                    <tr>
                        <td>Website</td>
                        <td> <input type="text" name="website" id="website" onChange={(e) => onChangeFunction(e)} value={website}
                        /></td>
                    </tr>
                    <tr>
                        <td><button onClick={() => onSubmitFunction()} > save</button></td>
                    </tr>
                </tbody>
            </table>
        </center>
    )
}

export default Register
