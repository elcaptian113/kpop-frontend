import './home.css';
import {Alert, Container} from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getGroupsById } from '../actions/action';
import './groups.css';

function GroupByIdPage(){
    const {groupId} = useParams();
    const [groups, setGroups] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(groups.length <=0){
            const fetchData = async () => {
                try{
                    let data = await getGroupsById(groupId);
                    setGroups(data);
                    console.log(data);
                    console.log(groups);
                    console.log(groupId);
                    
                }
                catch (e) {
                    setError(e.message);
                }
            }

            fetchData();
        }
    },[groups, groupId])

    if (groups.length > 0){
        return(
           <div className='group-index'>
                <Container>
                    <h1>Test: </h1>
                </Container>
            </div>
      );
    }
    else if (error || groups.length === 0){
        return(
           <div className='group-index'>
                <Container>
                    <h1>KPOP Groups</h1>
                    <Alert variant="danger">
                        <Alert.Heading>An error hass Occurred</Alert.Heading>
                        <p>{(error !== null) ? error: "Group Cannot Be Found."}</p>
                    </Alert>
               </Container>
            </div>
      );
    }
}

export default GroupByIdPage;