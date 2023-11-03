import { Card, Form, Button, Alert } from "react-bootstrap";
import React, { useState } from 'react';

const Home = () => {
        const [email, setEmail] = useState('');
        const [alertText, setAlertText] = useState('');
        const [showAlert, setShowAlert] = useState(false);

        const handleEmailChange = (e) => {
            setEmail(e.target.value);
          };

        const showEmailAlert = () => 
        {
            setShowAlert(true);
            setTimeout(() =>
            {
                setShowAlert(false);
            }, 5000);
            setAlertText(`Succesfully subscribed with email: ${email}`);
        }

    return (
    <>
        <Card style={{margin: '20px'}}>
            <Card.Header as ="h4">Welcome!</Card.Header>
            <Card.Body>
                <Card.Title>Home Page</Card.Title>
                <Card.Text>
                    This is the homepage of our website. Explore other sections using navigation above!
                </Card.Text>
            </Card.Body>
        </Card>
        <form style={{margin: '20px'}}>
            <Form.Group classname ="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Your email address here!" value={email} onChange={handleEmailChange}></Form.Control>
                <Form.Text classname ="text-muted">
                    Subscribe to our newsletter for updates.
                </Form.Text>
            </Form.Group>
        </form>
        <Button style={{ margin: '20px' }} onClick={showEmailAlert}>
            Subscribe! 
        </Button>
        {showAlert && <Alert variant="success"> {alertText}</Alert>}
        
    </>
    )
  };
  
  export default Home;