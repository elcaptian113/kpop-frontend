import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {deleteGroup} from '../../actions/action';
import './GroupCard.css';

function GroupCardAdmin(props) {

    const deleteById = (e) => {

        let group = props.groupId
        let response = deleteGroup(group);
        if (response){
            window.location.reload(false);
        }
    }

    function transformImageToURL(image){
        let route = String.fromCharCode(...image.data);
        let url = 'http://localhost:8900' + route;
        return url;
    }
    return(
        <Card style={{flex: '200px'}} key={props.id}>
            <Card.Img variant='top' src={ transformImageToURL(props.img)}/>
            <Card.Body>
                <Card.Title>ID: {props.groupId} - {props.name}</Card.Title>
                <Card.Text>{props.korean_name}</Card.Text>
            </Card.Body>
            <Card.Footer><Link to="/"><Button variant="warning">Update Group</Button></Link></Card.Footer>
            <Card.Footer><Button variant="danger" onClick={deleteById}>Delete Group</Button></Card.Footer>
        </Card>
    )
}

export default GroupCardAdmin;