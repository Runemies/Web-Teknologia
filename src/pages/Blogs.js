import Accordion from 'react-bootstrap/Accordion';
import { Card } from "react-bootstrap";

const Blogs = () => {
  return (
    <>
       <Card style={{margin: '20px'}}>
            <Card.Header as ="h4">Blogs</Card.Header>
            <Card.Body>
                <Card.Title>Blog articles</Card.Title>
                <Card.Text>
                    Find the latest articles and blog posts here.
                </Card.Text>
            </Card.Body>
        </Card>
        <Accordion defaultActiveKey="0" style={{margin: '20px'}} >
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
            <Card style={{margin: '20px'}}>
            <Card.Header as ="h4">Card Header #1</Card.Header>
            <Card.Body>
                <Card.Text>
                    Here's some content for the second blog article...
                </Card.Text>
            </Card.Body>
            </Card>
            </Accordion.Body>

          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Accordion Item #3</Accordion.Header>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>Accordion Item #4</Accordion.Header>
          </Accordion.Item>

        </Accordion>


    </>
  );
};
  
  export default Blogs;