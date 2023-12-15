import './home.css';

import {Alert, Container, CardGroup} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { getGroups } from '../actions/action';
import GroupCard from '../components/cards/GroupCard';

function GroupPage(){
    
    const [groups, setGroups] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(groups.length <=0){
            const fetchData = async () => {
                try{
                    let data = await getGroups();
                    setGroups(data);
                    //console.log(data)
                }
                catch (e) {
                    setError(e.message);
                }
            }

            fetchData();
        }
    },[groups])

    if (groups.length > 0){
        return(
           <div className='home-index'>
                <Container>
                    <h1>KPOP Groups</h1>
                    <CardGroup>
                        {
                            groups.map((group) => {
                                return <GroupCard
                                    key={group.id}
                                    name={group.name}
                                    korean_name={group.korean_name}
                                    img={group.image}
                                />
                            })
                        }
                    </CardGroup>
               </Container>
            </div>
      );
    }
    else if (error || groups.length === 0){
        return(
           <div className='home-index'>
                <Container>
                    <h1>KPOP Groups</h1>
                    <Alert variant="danger">
                        <Alert.Heading>An error hass Occurred</Alert.Heading>
                        <p>{(error !== null) ? error: "You currently have no groups available in your service."}</p>
                    </Alert>
               </Container>
            </div>
      );
    }
}

export default GroupPage;