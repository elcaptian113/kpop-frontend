import './home.css';
import {Alert, Container, Row, Col, Table} from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getIdolsById } from '../actions/action';
import './groups.css';

function IdolsByIdPage(){
    const {idolId} = useParams();
    let [idols, setIdols] = useState([]);
    const [error, setError] = useState(null);
    let {groupName} = '';

    function transformImageToURL(image){
        let route = String.fromCharCode(...image.data);
        let url = 'http://localhost:8900' + route;
        return url;
    }

    useEffect(() => {
        if(idols.length <=0){
            const fetchData = async () => {
                try{
                    let data = await getIdolsById(idolId);
                    setIdols(data);
                    idols = data;
                    idols.image = transformImageToURL(idols.image);
                    //console.log(idols.group.name);
                    idols.group = idols.group.name;
                    //console.log(idols.group);  
                }
                catch (e) {
                    setError(e.message);
                }
            }

            fetchData();
        }
    },[idols, idolId])

    if (idols){
        return(
           <div className='idol-index'>
                <Container>
                    <Row>
                        <Col sm={6}>
                            <img variant='top' src={idols.image} />
                            
                        </Col>
                        <Col sm={4} className="groupTable">
                            <table>
                                <tbody>
                                <tr>
                                    <th><h5>Stage Name:</h5></th>
                                    <td>{idols.stage_name}</td>
                                    <td>{idols.korean_stage_name}</td>
                                </tr>
                                <tr>
                                    <th><h5>Full Name:</h5></th>
                                    <td>{idols.full_name}</td>
                                    <td>{idols.korean_name}</td>
                                </tr>
                                <tr>
                                    <th><h5>Birthday:</h5></th>
                                    <td>{idols.dob}</td>
                                </tr>
                                <tr>
                                    <th><h5>Home Country:</h5></th>
                                    <td>{idols.country}</td>
                                </tr>
                                <tr>
                                    <th><h5>Birthplace:</h5></th>
                                    <td>{idols.birthplace}</td>
                                </tr>
                                <tr>
                                    <th><h5>Group:</h5></th>
                                    <td>{idols.group}</td>
                                </tr>
                                <tr>
                                    <th><h5>Other Groups:</h5></th>
                                    <td>{idols.other_group}</td>
                                </tr>
                                <tr>
                                    <th><h5>Gender:</h5></th>
                                    <td>{idols.gender}</td>
                                </tr>
                                </tbody>
                            </table>
                        </Col>
                    </Row>
                </Container>
            </div>
      );
    }
    else if (error || idols.length === 0){
        return(
           <div className='idol-index'>
                <Container>
                    <h1>KPOP Idols</h1>
                    <Alert variant="danger">
                        <Alert.Heading>An error hass Occurred</Alert.Heading>
                        <p>{(error !== null) ? error: "Idol Cannot Be Found."}</p>
                    </Alert>
               </Container>
            </div>
      );
    }
}

export default IdolsByIdPage;