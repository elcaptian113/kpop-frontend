import {Card} from 'react-bootstrap';
import './GroupCard.css';

function VideoCard(props) {
    return(
        <Card style={{flex: '200px'}} key={props.id}>
            <Card.Body>
                <Card.Title>{props.artist}</Card.Title>
                <Card.Text>{props.song_name}</Card.Text>
                <Card.Text>{props.korean_name}</Card.Text>
                <iframe 
                src={"https://www.youtube.com/embed/"+ props.youtube.video.extention}
                style={{width: 560, height: 315, border: 0, borderRadius: "4px", overflow: "hidden"}} 
                sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
                allowfullscreen=""></iframe>
            </Card.Body>
        </Card>
    )
}

export default VideoCard;