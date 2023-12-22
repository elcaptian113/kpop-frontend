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
                <Card.Title>ID: {props.groupId}</Card.Title>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>{props.sname}</Card.Text>
                <Card.Text>{props.korean_name}</Card.Text>
                <Card.Text>Debut: {props.debut}</Card.Text>
                <Card.Text>Company: {props.company}</Card.Text>
                <Card.Text>Current Members: {props.current}</Card.Text>
                <Card.Text>Original Members: {props.original}</Card.Text>
                <Card.Text>Fanbase: {props.fans}</Card.Text>
                <Card.Text>Active: {props.active}</Card.Text>
                <Card.Text>Gender: {props.gender}</Card.Text>
            </Card.Body>
            <Card.Footer><Link to={"/UpdateGroup/" + props.groupId}><Button variant="warning">Update Group</Button></Link></Card.Footer>
            <Card.Footer><Button variant="danger" onClick={deleteById}>Delete Group</Button></Card.Footer>
        </Card>
    )
}

export default GroupCardAdmin;