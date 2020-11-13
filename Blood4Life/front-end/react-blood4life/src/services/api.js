import axios from 'axios';

const api = axios.create({
    //baseUrl: process.env.NODE_ENV === 'developmente' ? 'http://localhost:8000' : 'https://nodeblood.azurewebsites.net'
     baseURL: "http://localhost:8080"
});

export default api;