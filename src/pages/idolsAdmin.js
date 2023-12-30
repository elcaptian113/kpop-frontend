import './home.css';
import {Alert, Container, CardGroup, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getIdols } from '../actions/action';
import IdolCardAdmin from '../components/cards/IdolCardAdmin';
import './groups.css';

function IdolsAdminPage(){
    
    const [idols, setIdols] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(idols.length <=0){
            const fetchData = async () => {
                try{
                    let data = await getIdols();
                    setIdols(data);
                    console.log(data);
                    console.log(idols);
                }
                catch (e) {
                    setError(e.message);
                }
            }

            fetchData();
        }
    },[idols])

    if (idols.length > 0){
        return(
           <div className='IdolsAdmin-index'>
                <Container>
                    <h1>Idols Admin Page</h1>
                    <Link className="d-grid"  to="/addIdol"><Button variant="success" size="lg">Add new Idol</Button></Link>
                    
                    <CardGroup>
                        {
                            idols.map((idol) => {
                                if(idol.id !== 1668)
                                return <IdolCardAdmin 
                                        key={idol.id}
                                        idolId={idol.id}
                                        name={idol.stage_name}
                                        korean_stage_name={idol.korean_stage_name}
                                        full_name={idol.full_name}
                                        korean_name={idol.korean_name}
                                        dob={idol.dob}
                                        country={idol.country}
                                        birthplace={idol.birthplace}
                                        other_group={idol.other_group}
                                        gender={idol.gender}
                                        groupId={idol.group.id}
                                        img={idol.image}
                                />
                            })
                        }
                    </CardGroup>
                </Container>
            </div>
      );
    }
    else if (error || idols.length === 0){
        return(
           <div className='IdolAdmin-index'>
                <Container>
                    <h1>Idols</h1>
                    <Alert variant="danger">
                        <Alert.Heading>An error hass Occurred</Alert.Heading>
                        <p>{(error !== null) ? error: "You currently have no Idols available in your service."}</p>
                    </Alert>
               </Container>
            </div>
      );
    }
}

export default IdolsAdminPage;