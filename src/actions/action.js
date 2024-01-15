import axios from 'axios';

//set API URL
const url = 'http://localhost:8900/';

//GET all endpoint (READ records)
const getGroups = async() => {
    let response = await axios.get(url + "groups").then(response => {
        return response.data;
    });
    
    return response;
};
//GET by ID enpoint
const getGroupsById = async(group) => {
    let response = await axios.get(url + "groups/" +  group).then(response => {
        return response.data;
    });
    
    return response;
};
//GET by NAME endpoint
const getGroupsByName = async(group) => {
    let response = await axios.get(url + "groups/name/" +  group).then(response => {
        return response.data;
    });
    
    return response;
};
//DELETE endpoint - ensure parameter formatting as prop is passed as object
const deleteGroup = async (group) => {
    let response = await axios.delete("http://localhost:8900/groups", {data: {id:group}}
    ).then(response => {
        return response.data;
    });

    return response;
}
//PUT enpoint(UPDATE record)
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
//POST endpoint (CREATE record)
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


export {getGroups, getIdols, deleteGroup, updateGroup, addGroup, getGroupsById, getIdolsById, getIdolsByGroupId, deleteIdol, addIdol, updateIdol, getGroupsByName};