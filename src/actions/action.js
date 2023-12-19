import axios from 'axios';

const url = 'http://localhost:8900/';

const getGroups = async() => {
    let response = await axios.get(url + "groups").then(response => {
        return response.data;
    });
    
    return response;
};
const deleteGroup = async (group) => {
    let response = await axios.delete("http://localhost:8900/groups", {data: {id:group}}
    ).then(response => {
        return response.data;
    });

    return response;
}
const updateGroup = async (group) => {
    let response = await axios.put(url + "groups", group,{
        headers: {
            'content-type':'multipart/form-data'
        }
    }).then(response => {
        return response.data;
    });

    return response;
}
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


export {getGroups, getIdols, getVideos, deleteGroup, updateGroup};