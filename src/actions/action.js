import axios from 'axios';

const url = 'http://localhost:8900/';

const getGroups = async() => {
    let response = await axios.get(url + "groups").then(response => {
        return response.data;
    });
    
    return response;
};

export {getGroups};