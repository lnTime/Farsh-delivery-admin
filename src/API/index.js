import axios from 'axios';


export const API = axios.create({
    baseURL: "http://54.156.46.17:8080/api/v1/",
    headers: {
        "Content-Type": "application/json",
    }
});