import axios from 'axios';

const url = 'http://localhost:3003/users';

export const getUsers = async () => {
    try {
        const data = await axios.get(url);
        return data;
    }
    catch (err) {
        console.log(err)
    }
}
export const Edituser = async (id) => {
    try {
        const data = await axios.get(`${url}/${id}`);
        return data;
    }
    catch (err) {
        console.log(err)
    }
}
export const addUser = async (user) => {
    console.log("api", user)
    try {
        const data = await axios.post(url, user);
        return data;
    }
    catch (err) {
        console.log(err)
    }
}
export const deleteuser = async (id) => {
    return await axios.delete(`${url}/${id}`);
}
export const updateUser = async (id, user) => {
    const data = await axios.put(`${url}/${id}`, user);
    try {
        return data;
    }
    catch (err) {
        console.log(err)
    }
}