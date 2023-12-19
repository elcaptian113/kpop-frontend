import './home.css';

import {Container, Row, Col} from 'react-bootstrap';



function HomePage(){
    
    return(
           <div className='home-index'>
                <Container>
                    <h1>Ultimate KPOP Database</h1>
                    <br></br>
                    <Container>
                        <Row>
                            <Col sm={4}>
                                <img src="https://www.rollingstone.com/wp-content/uploads/2023/07/kpop100-list-taegeuk.jpg?w=1581&amp;h=1054&amp;crop=1"  
                                     style={{ height: "30vmin"}} 
                                     alt="The 100 Best Korean Pop Songs Of All Time" />
                            </Col>
                            <Col sm={8}>
                                <p>Welcome to the Ultimate KPOP Database!</p>
                            </Col>
                        </Row>
                    </Container>
               </Container>
            </div>
    );  
}

export default HomePage;