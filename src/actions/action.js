import axios from 'axios';

const url = 'http://localhost:8900/';

const getGroups = async() => {
    let response = await axios.get(url + "groups").then(response => {
        return response.data;
    });
    
    return response;
};
const getIdols = async() => {
    let response = await axios.get(url + "idols").then(response => {
        return response.data;
    });
    
    return response;
};
const getVideos = async() => {
    let response = await axios.get(url + "videos").then(response => {
        return response.data;
    });
    
    return response;
};


export {getGroups, getIdols, getVideos};