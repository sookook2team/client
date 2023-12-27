import axios from 'axios';

export const createUser = async (name, email, password) => {
    const data = {
        email: email,
        username: name,
        password: password
    }
    const response = await axios.post('http://10.223.117.135:8080/user/signup', data);
    return response.data;
}

export const loginUser = async (email, password) => {
    const data = {
        email: email,
        password: password,
    }
    const response = await axios.post('http://10.223.117.135:8080/user/login', data);
    return response.data;
}