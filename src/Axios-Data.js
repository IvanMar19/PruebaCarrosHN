import axios from 'axios';

const instance = axios.create({

    baseURL: 'https://carros-alquiler-default-rtdb.firebaseio.com/'

});

export default instance;