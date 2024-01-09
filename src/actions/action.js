import axios from 'axios';

const url = 'http://localhost:8900/';

const getGroups = async() => {
    let response = await axios.get(url + "groups").then(response => {
        return response.data;
    });
    
    return response;
};
const getGroupsById = async(group) => {
    let response = await axios.get(url + "groups/" +  group).then(response => {
        return response.data;
    });
    
    return response;
};

const getGroupsByName = async(group) => {
    let response = await axios.get(url + "groups/name/" +  group).then(response => {
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
const addGroup = async (group) => {
    let response = await axios.post(url + "groups", group,{
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
const getIdolsById = async(idol) => {
    let response = await axios.get(url + "idols/" +  idol).then(response => {
        return response.data;
    });
    
    return response;
};
const getIdolsByGroupId = async(group) => {
    let response = await axios.get(url + "idols/group/" +  group).then(response => {
        return response.data;
    });
    
    return response;
};
const deleteIdol = async (idol) => {
    let response = await axios.delete("http://localhost:8900/idols", {data: {id:idol}}
    ).then(response => {
        return response.data;
    });

    return response;
}
const updateIdol = async (idol) => {
    let response = await axios.put(url + "idols", idol,{
        headers: {
            'content-type':'multipart/form-data'
        }
    }).then(response => {
        return response.data;
    });

    return response;
}
const addIdol = async (idol) => {
    let response = await axios.post(url + "idols", idol,{
        headers: {
            'content-type':'multipart/form-data'
        }
    }).then(response => {
        return response.data;
    });

    return response;
}


export {getGroups, getIdols, deleteGroup, updateGroup, addGroup, getGroupsById, getIdolsById, getIdolsByGroupId, deleteIdol, addIdol, updateIdol};