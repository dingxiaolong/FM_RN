import axios from 'axios'
import Config from 'react-native-config';



axios.defaults.baseURL = Config.API_URL;


axios.interceptors.request.use(
    function(config) {
        console.log(config);
        return config;
    },
    function(error) {
        return Promise.reject(error);
    }
)

axios.interceptors.response.use(
    function(response) {
        console.log(response);
        return response.data;
    },
    function(error) {
        return Promise.reject(error);
    }
)