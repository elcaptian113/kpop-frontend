import './home.css';
import {Alert, Container, Row, Col, CardGroup} from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getGroupsById, getIdolsByGroupId } from '../actions/action';
import IdolCard from '../components/cards/IdolCard';
import './groups.css';

function GroupByIdPage(){
    const {groupId} = useParams();
    let [groups, setGroups] = useState([]);
    let [idols, setIdols] = useState([]);
    const [error, setError] = useState(null);

    function transformImageToURL(image){
        let route = String.fromCharCode(...image.data);
        let url = 'http://localhost:8900' + route;
        return url;
    }

    useEffect(() => {
        if(groups.length <=0){
            const fetchData = async () => {
                try{
                    let data = await getGroupsById(groupId);
                    setGroups(data);
                    //console.log(data);
                    //console.log(groups);
                    //console.log(groupId);
                    groups = data;
                    groups.image = transformImageToURL(groups.image);
                    //console.log(groups.image);
                    let data1 = await getIdolsByGroupId(groupId);
                    setIdols(data1);
                }
                catch (e) {
                    setError(e.message);
                }
            }

            fetchData();
        }
    },[groups, groupId, idols])

    if (groups){
        return(
           <div className='group-index'>
                <Container>
                    <Row>
                        <Col sm={6}>
                            <img variant='top' src={groups.image} />
                            
                        </Col>
                        <Col sm={4} className="groupTable">
                            <table>
                                <tbody>
                                <tr>
                                    <th><h5>Name:</h5></th>
                                    <td>{groups.name} {groups.korean_name}</td>
                                </tr>
                                <tr>
                                    <th><h5>Alias:</h5></th>
                                    <td>{groups.short_name}</td>
                                </tr>
                                <tr>
                                    <th><h5>Debut date:</h5></th>
                                    <td>{groups.debut}</td>
                                </tr>
                                <tr>
                                    <th><h5>Record Company:</h5></th>
                                    <td>{groups.company}</td>
                                </tr>
                                <tr>
                                    <th><h5>Current Members:</h5></th>
                                    <td>{groups.current_members}</td>
                                </tr>
                                <tr>
                                    <th><h5>Original Members:</h5></th>
                                    <td>{groups.original_members}</td>
                                </tr>
                                <tr>
                                    <th><h5>Fanbase:</h5></th>
                                    <td>{groups.fanclub_name}</td>
                                </tr>
                                <tr>
                                    <th><h5>Active:</h5></th>
                                    <td>{groups.active}</td>
                                </tr>
                                <tr>
                                    <th><h5>Gender:</h5></th>
                                    <td>{groups.gender}</td>
                                </tr>
                                </tbody>
                            </table>
                        </Col>
                    </Row>
                    <Row>
                        <h1>Idols</h1>
                        <CardGroup>
                            {
                                idols.map((idol) => {
                                    if(idol.id != 1668)
                                    return <IdolCard 
                                        key={idol.id}
                                        idolId={idol.id}
                                        sname={idol.stage_name}
                                        ksname={idol.korean_stage_name}
                                        kname={idol.korean_name}
                                        fname={idol.full_name}
                                        img={idol.image}
                                    />
                                })
                            }
                        </CardGroup>
                    </Row>
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