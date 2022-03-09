import React from 'react'
import { useState, useEffect } from "react";
import { Edituser, updateUser } from "../Services/Api";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { toast } from 'react-toastify';
function Edit() {
    const Navigate = useNavigate();
    const { id } = useParams();
    const initialvalue = {
        name: '',
        username: '',
        email: '',
        address: '',
        phone: '',
        website: ''
    }
    const [user, setUser] = useState(initialvalue);
    // const { name, username, email, address, phone, website } = user;
    const onChangeFunction = (e) => {
        console.log(e);
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        loaduser()
    }, [])

    const loaduser = async () => {

        const result = await Edituser(id)
        setUser(result.data)
    }
    const userUpdateApi = async (id) => {
        // console.log("rarararar", id);
        const result = await updateUser(id, user)

        setUser(result.data)
        Navigate("/Data")
        toast('Data Updated successfully', {
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
        user &&
        <center>
            <table border="5">
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td><input type="text" name="name" onChange={(e) => onChangeFunction(e)} value={user.name}
                        />
                        </td>
                    </tr>
                    <tr>
                        <td>Username</td>
                        <td><input type="text" name="username" id="username" onChange={(e) => onChangeFunction(e)} value={user.username}
                        /></td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td> <input type="text" name="email" id="email" onChange={(e) => onChangeFunction(e)} value={user.email}
                        /></td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td> <input type="text" name="address" id="address" onChange={(e) => onChangeFunction(e)} value={user.address}
                        /></td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td> <input type="text" name="phone" id="phone" onChange={(e) => onChangeFunction(e)} value={user.phone}
                        /></td>
                    </tr>
                    <tr>
                        <td>Website</td>
                        <td> <input type="text" name="website" id="website" onChange={(e) => onChangeFunction(e)} value={user.website}
                        /></td>
                    </tr>
                    <tr>
                        <td><button onClick={() => userUpdateApi(user.id)} > update</button></td>
                    </tr>
                </tbody>
            </table>
        </center>
    )
}

export default Edit
