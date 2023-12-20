import {Card} from 'react-bootstrap';
import YouTube from 'react-youtube';
import './GroupCard.css';

function VideoCard(props) {
    const options = {
        width: '560',
        height: '315',
    }
    const onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
      
    return(
        <Card style={{flex: '600px'}} key={props.id}>
            <Card.Body>
                <Card.Title>{props.artist}</Card.Title>
                <Card.Text>{props.song_name}</Card.Text>
                <Card.Text>{props.korean_name}</Card.Text>
                
            </Card.Body>
        </Card>
    )
}

export default VideoCard;
