import {Form, Container, Button, Alert} from 'react-bootstrap';
import {updateGroup} from '../actions/action';
import './UpdateGroup.css';
import { useParams } from "react-router-dom";
import { useState } from 'react';

function UpdateGroup() {
    const {groupId} = useParams();
    const [name, setName] = useState('');
    const [short_name, setShortName] = useState('');
    const [korean_name, setKoreanName] = useState('');
    const [debut, setDebut] = useState(new Date())
    const [company, setCompany] = useState('');
    const [current_members, setCurrentMembers] = useState(0);
    const [original_members, setOriginalMembers] = useState(0);
    const [fanclub_name, setFanclubName] = useState('');
    const [active, setActive] = useState('');
    const [gender, setGender] = useState('');
    const [image, setImage] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const submitData = async(group) => {
        try{
            let response = await updateGroup(group);

            if (response){
                setSuccess(true)
                //add in the reroute here
            }
        }
        catch (e){
            setError(e.message);
        }  
    }

    const submitGroup= (e) => {
        e.preventDefault();

        setSuccess(false);
        setError('');

        if (name && korean_name && active && image){
            let group = {
                id: groupId,
                name: name,
                short_name: short_name,
                korean_name: korean_name,
                debut: debut,
                company: company,
                current_members: current_members,
                original_members: original_members,
                fanclub_name: fanclub_name,
                active: active,
                gender: gender,
                image: image
            };

            submitData(group);
        }
        else{
            setError('All required fields must contain a value!')
        }
    }
    return(
        <div className='update-group'>
            <h1>Update Group Information</h1>
            <p>Group ID: {groupId}</p>

            <Container>
                <Alert show={success} variant='success'>
                    <Alert.Heading>Success!</Alert.Heading>
                </Alert>
                <Alert show={error} variant="danger">
                    <Alert.Heading>An Error has Occurred</Alert.Heading>
                    <p>{error}</p>
                </Alert>
            </Container>

            <Container>
                <Form onSubmit={submitGroup}>
                    <Form.Group className ='mb-4' controlId='groupName'>
                        <Form.Label>Group Name</Form.Label>
                        <Form.Control type = "text" placeholder='' onChange={e => setName(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className ='mb-4' controlId='shortName'>
                        <Form.Label>Short Name</Form.Label>
                        <Form.Control type = "text" placeholder='' onChange={e => setShortName(e.target.value)} />
                    </Form.Group>
                    <Form.Group className ='mb-4' controlId='kName'>
                        <Form.Label>Korean Name</Form.Label>
                        <Form.Control type = "text" placeholder='' onChange={e => setKoreanName(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className ='mb-4' controlId='debutDate'>
                        <Form.Label>Debut Date</Form.Label>
                        <Form.Control type = "date" placeholder='' onChange={e => setDebut(e.target.value)} />
                    </Form.Group>
                    <Form.Group className ='mb-4' controlId='company'>
                        <Form.Label>Company</Form.Label>
                        <Form.Control type = "text" placeholder='E' onChange={e => setCompany(e.target.value)} />
                    </Form.Group>
                    <Form.Group className ='mb-4' controlId='currMembers'>
                        <Form.Label>Current Members</Form.Label>
                        <Form.Control type = "number" step="1" placeholder='0' onChange={e => setCurrentMembers(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className ='mb-4' controlId='oriMembers'>
                        <Form.Label>Original Members</Form.Label>
                        <Form.Control type = "number" step="1" placeholder='0' onChange={e => setOriginalMembers(e.target.value)} />
                    </Form.Group>
                    <Form.Group className ='mb-4' controlId='fans'>
                        <Form.Label>Fanclub Name</Form.Label>
                        <Form.Control type = "text" placeholder='' onChange={e => setFanclubName(e.target.value)} />
                    </Form.Group>
                    <Form.Group className ='mb-4' controlId='stillActive'>
                        <Form.Label>Active</Form.Label>
                        <Form.Control type = "text" placeholder='' onChange={e => setActive(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className ='mb-4' controlId='gender'>
                        <Form.Label>Gender</Form.Label>
                        <Form.Control type = "text" placeholder='' onChange={e => setGender(e.target.value)} />
                    </Form.Group>
                    <Form.Group className ='mb-4' controlId='image'>
                        <Form.Label>Image</Form.Label>
                        <Form.Control type = "file" onChange={e => setImage(e.target.files[0])} required/>
                    </Form.Group>
                    <Button variant='primary' type='submit'>
                        Update Group
                    </Button>
                </Form>
            </Container>
        </div>
    );
}

export default UpdateGroup;