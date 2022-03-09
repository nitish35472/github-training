import React from 'react';
import { getUsers, deleteuser } from "../Services/Api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
export const Data = () => {

    // let navigate = useNavigate();
    const [users, setUsers] = useState([])
    useEffect(() => {
        getData();
    }, [])
    const getData = async () => {
        const response = await getUsers();
        console.log("response", response);
        setUsers(response.data)

    }
    const deleteuserdata = async (id) => {
        await deleteuser(id);
        getData();
        toast(' Data Deleted successfully', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    const Editus = async (id) => {
        console.log("here", id);
        // await Edituser(id);
        // navigate(`Edit/${id}`);
        getData()

    }
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Username</td>
                        <td>Email</td>
                        <td>Address</td>
                        <td>Phone</td>
                        <td>Website</td>
                        <td>Edit</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => {
                            console.log("users", user)
                            return <tr>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.address}</td>
                                <td>{user.phone}</td>
                                <td>{user.website}</td>
                                <Link to={`/Edit/${user.id}`} ><button onClick={() => Editus(user.id)}>
                                    Edit
                                </button>
                                </Link>
                                <td><button onClick={() => deleteuserdata(user.id)} >Delete</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table >
        </>
    )
}
export default Data