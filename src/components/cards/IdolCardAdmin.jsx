import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {deleteIdol} from '../../actions/action';
import './GroupCard.css';

function IdolCardAdmin(props) {

    const deleteById = (e) => {

        let idol = props.idolId
        let response = deleteIdol(idol);
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
                <Card.Title>ID: {props.idolId}</Card.Title>
                <Card.Title>Stage Name: {props.name}</Card.Title>
                <Card.Text>{props.korean_stage_name}</Card.Text>
                <Card.Text>Full Name: {props.full_name}</Card.Text>
                <Card.Text>{props.korean_name}</Card.Text>
                <Card.Text>Birthday: {props.dob}</Card.Text>
                <Card.Text>Country: {props.country}</Card.Text>
                <Card.Text>Birthplace: {props.birthplace}</Card.Text>
                <Card.Text>Other Groups: {props.other_group}</Card.Text>
                <Card.Text>Gender: {props.gender}</Card.Text>
                <Card.Text>GroupId: {props.groupId}</Card.Text>
            </Card.Body>
            <Card.Footer><Link to={"/UpdateIdol/" + props.idolId}><Button variant="warning">Update Idol</Button></Link></Card.Footer>
            <Card.Footer><Button variant="danger" onClick={deleteById}>Delete Idol</Button></Card.Footer>
        </Card>
    )
}

export default IdolCardAdmin;