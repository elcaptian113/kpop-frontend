import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './GroupCard.css';

function GroupCard(props) {
    function transformImageToURL(image){
        let route = String.fromCharCode(...image.data);
        let url = 'http://localhost:8900' + route;
        return url;
    }
    return(
        <Link to={"/ViewGroup/" + props.groupId}>
        <Card hoverable style={{flex: '200px'}} key={props.id}>
            <Card.Img variant='top' src={ transformImageToURL(props.img)}/>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>{props.korean_name}</Card.Text>
            </Card.Body>
        </Card>
        </Link>
    )
}

export default GroupCard;