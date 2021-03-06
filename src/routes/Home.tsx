import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>React Interview Project</h1>
          <p>
            Welcome to the TerraQuest React interview project! Please use this project to develop the test requirements
            within.
          </p>

          <hr />

          <Button>View Companies</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
