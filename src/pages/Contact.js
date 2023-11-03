import { Button, Card } from "react-bootstrap";

const Contact = () => {
    return (
      <>
      <Card style={{margin: '20px'}}>
            <Card.Header as ="h4">Contact me!</Card.Header>
            <Card.Body>
                <Card.Text>
                    For questions or feedback, please choose category below:
                </Card.Text>
            </Card.Body>
        </Card>

        <Card style={{margin: '20px'}}>
            <Card.Header>General Inquiry</Card.Header>
            <Card.Body>
                <Card.Text>
                  For general inquiries, please email us at:
                </Card.Text>
                <Button>general@example.com</Button>
            </Card.Body>
        </Card>

        <Card style={{margin: '20px'}}>
            <Card.Header>Feedback</Card.Header>
            <Card.Body>
                <Card.Text>
                  we value your feedback! Please share your comment at:
                </Card.Text>
                <Button variant ="warning">feedback@example.com</Button>
            </Card.Body>
        </Card>

        <Card style={{margin: '20px'}}>
            <Card.Header>Support</Card.Header>
            <Card.Body>
                <Card.Text>
                  Need assistance? Contact our support at:
                </Card.Text>
                <Button variant ="secondary">support@example.com</Button>
            </Card.Body>
        </Card>


      </>
    )
  };
  
  export default Contact;