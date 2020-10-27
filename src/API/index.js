import axios from 'axios';

export const API = axios.create({
    baseURL: "http://farsh.delivery/api/v1/",
    headers: {
        "Content-Type": "application/json",
    },
});
