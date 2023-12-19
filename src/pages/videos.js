import './home.css';

import {Container, Alert, CardGroup} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { getVideos } from '../actions/action';
import VideoCard from '../components/cards/VideoCard';



function VideoPage(){
    
    const [videos, setVideos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(videos.length <=0){
            const fetchData = async () => {
                try{
                    let data = await getVideos();
                    setVideos(data);
                    //console.log(data)
                }
                catch (e) {
                    setError(e.message);
                }
            }

            fetchData();
        }
    },[videos])

    if (videos.length > 0){
        return(
           <div className='video-index'>
                <Container>
                    <h1>KPOP Music Videos</h1>

                    <CardGroup>
                        {
                            videos.map((video) => {
                            
                                return <VideoCard 
                                    key={video.id}
                                    artist={video.name}
                                    song_name={video.song_name}
                                    korean_name={video.korean_name}
                                    iframe={video.iframe}
                                />
                            })
                        }
                    </CardGroup>

                </Container>
            </div>
      );
    }
    else if (error || videos.length === 0){
        return(
           <div className='video-index'>
                <Container>
                    <h1>KPOP Videos</h1>
                    <Alert variant="danger">
                        <Alert.Heading>An error hass Occurred</Alert.Heading>
                        <p>{(error !== null) ? error: "You currently have no videos available in your service."}</p>
                    </Alert>
               </Container>
            </div>
      );
    }
}

export default VideoPage;