import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8080/backend/nutriclick/routes',
    withCredentials: true
})

api.interceptors.response.use(
    (response) => response, 
    (error) => {
        if(error.response.status === 403) {
            return window.location.href = '/signin';
        } else {
            return error;
        }
    } )

export { api };