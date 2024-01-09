import './home.css';
import {Container} from 'react-bootstrap';
import homeImage from '../images/homeImage.jpg';



function HomePage(){
    
    return(
           <div className='home-index'>
                <Container>
                    <h1>Ultimate KPOP Database</h1>
                    <br></br>
                                <img src={homeImage}  
                                     style={{ height: "50vmin"}} 
                                     alt="The 100 Best Korean Pop Songs Of All Time" />
                                <p>Welcome to the Ultimate KPOP Database!</p>
               </Container>
            </div>
    );  
}

export default HomePage;