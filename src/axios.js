import axios from 'axios';

const instance = axios.create({
    baseURL : 'http://127.0.0.1:5001/amaz-clone-6c75c/us-central1/api' // The api ccloud function url
});

export default instance;