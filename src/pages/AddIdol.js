import {Form, Container, Button, Alert} from 'react-bootstrap';
import {addIdol} from '../actions/action';
import './UpdateGroup.css';
import { useState } from 'react';

function AddIdol() {
    const [stage_name, setStageName] = useState('');
    const [full_name, setFullName] = useState('');
    const [korean_name, setKoreanName] = useState('');
    const [korean_stage_name, setKoreanStageName] = useState('');
    const [dob, setDob] = useState(new Date())
    const [country, setCountry] = useState('');
    const [birthplace, setBirthplace] = useState('');
    const [other_group, setOtherGroup] = useState('');
    const [gender, setGender] = useState('');
    const [groupId, setGroupId] = useState(0);
    const [image, setImage] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const submitData = async(idol) => {
        try{
            let response = await addIdol(idol);

            if (response){
                setSuccess(true)
            }
        }
        catch (e){
            setError(e.message);
        }  
    }

    const submitIdol= (e) => {
        e.preventDefault();

        setSuccess(false);
        setError('');

        if (stage_name && korean_name && dob && image){
            let idol = {
                stage_name: stage_name,
                full_name: full_name,
                korean_name: korean_name,
                korean_stage_name: korean_stage_name,
                dob: dob,
                country: country,
                birthplace: birthplace,
                other_group: other_group,
                gender: gender,
                groupId: groupId,
                image: image
            };

            submitData(idol);
        }
        else{
            setError('All required fields must contain a value!')
        }
    }
    return(
        <div className='add-idol'>
            <h1>Update Idol Information</h1>

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
                <Form onSubmit={submitIdol}>
                    <Form.Group className ='mb-4' controlId='idolName'>
                        <Form.Label>Stage Name</Form.Label>
                        <Form.Control type = "text" placeholder='' onChange={e => setStageName(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className ='mb-4' controlId='fullName'>
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type = "text" placeholder='' onChange={e => setFullName(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className ='mb-4' controlId='kName'>
                        <Form.Label>Korean Name</Form.Label>
                        <Form.Control type = "text" placeholder='' onChange={e => setKoreanName(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className ='mb-4' controlId='ksName'>
                        <Form.Label>Korean Stage Name</Form.Label>
                        <Form.Control type = "text" placeholder='' onChange={e => setKoreanStageName(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className ='mb-4' controlId='dob'>
                        <Form.Label>Birthday</Form.Label>
                        <Form.Control type = "date" placeholder='' onChange={e => setDob(e.target.value)} />
                    </Form.Group>
                    <Form.Group className ='mb-4' controlId='country'>
                        <Form.Label>Country</Form.Label>
                        <Form.Control type = "text" placeholder='' onChange={e => setCountry(e.target.value)} />
                    </Form.Group>
                    <Form.Group className ='mb-4' controlId='birthplace'>
                        <Form.Label>Birthplace</Form.Label>
                        <Form.Control type = "text" placeholder='' onChange={e => setBirthplace(e.target.value)} />
                    </Form.Group>
                    <Form.Group className ='mb-4' controlId='otherGroups'>
                        <Form.Label>Other Groups</Form.Label>
                        <Form.Control type = "text" placeholder='' onChange={e => setOtherGroup(e.target.value)} />
                    </Form.Group>
                    <Form.Group className ='mb-4' controlId='gender'>
                        <Form.Label>Gender</Form.Label>
                        <Form.Control type = "text" placeholder='' onChange={e => setGender(e.target.value)} />
                    </Form.Group>
                    <Form.Group className ='mb-4' controlId='groupId'>
                        <Form.Label>GroupId</Form.Label>
                        <Form.Control type = "number" step="1" placeholder='If Solo Idol use 1' onChange={e => setGroupId(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className ='mb-4' controlId='image'>
                        <Form.Label>Image</Form.Label>
                        <Form.Control type = "file" onChange={e => setImage(e.target.files[0])} required/>
                    </Form.Group>
                    <Button variant='primary' type='submit'>
                        Add Idol
                    </Button>
                </Form>
            </Container>
        </div>
    );
}

export default AddIdol;