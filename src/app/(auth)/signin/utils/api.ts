import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://127.0.0.1:80/backend/nutriclick/routes'
})