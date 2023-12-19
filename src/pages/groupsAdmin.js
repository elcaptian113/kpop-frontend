import './home.css';
import {Alert, Container, CardGroup, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getGroups } from '../actions/action';
import GroupCardAdmin from '../components/cards/GroupCardAdmin';
import './groups.css';

function GroupAdminPage(){
    
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
           <div className='groupAdmin-index'>
                <Container>
                    <h1>KPOP Groups Admin Page</h1>
                    <Link className="d-grid"  to="/"><Button variant="success" size="lg">Add new Group</Button></Link>
                    
                    <CardGroup>
                        {
                            groups.map((group) => {
                                if(group.id>1)
                                return <GroupCardAdmin 
                                    key={group.id}
                                    groupId={group.id}
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
           <div className='groupAdmin-index'>
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

export default GroupAdminPage;