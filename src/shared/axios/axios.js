import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://psclean-server.herokuapp.com'
});

export default instance;
