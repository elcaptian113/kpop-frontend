import './home.css';
import {Alert, Container, CardGroup} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { getIdols } from '../actions/action';
import IdolCard from '../components/cards/IdolCard';
import './groups.css';

function IdolPage(){
    
    const [idols, setIdols] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(idols.length <=0){
            const fetchData = async () => {
                try{
                    let data = await getIdols();
                    setIdols(data);
                    console.log(data)
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
           <div className='idol-index'>
                <Container>
                    <h1>KPOP Idols</h1>
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
                </Container>
            </div>
      );
    }
    else if (error || idols.length === 0){
        return(
           <div className='group-index'>
                <Container>
                    <h1>KPOP Idols</h1>
                    <Alert variant="danger">
                        <Alert.Heading>An error hass Occurred</Alert.Heading>
                        <p>{(error !== null) ? error: "You currently have no groups available in your service."}</p>
                    </Alert>
               </Container>
            </div>
      );
    }
}

export default IdolPage;