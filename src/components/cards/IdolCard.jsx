import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './GroupCard.css';

function IdolCard(props) {
    function transformImageToURL(image){
        let route = String.fromCharCode(...image.data);
        let url = 'http://localhost:8900' + route;
        return url;
    }
    return(
        <Link to={"/ViewIdol/" + props.idolId}>
        <Card hoverable style={{flex: '200px'}} key={props.id}>
            <Card.Img variant='top' src={ transformImageToURL(props.img)}/>
            <Card.Body>
                <Card.Title>{props.sname}</Card.Title>
                <Card.Title>{props.ksname}</Card.Title>
                <Card.Text>{props.kname}</Card.Text>
                <Card.Text>{props.fname}</Card.Text>
            </Card.Body>
        </Card>
        </Link>
    )
}

export default IdolCard;