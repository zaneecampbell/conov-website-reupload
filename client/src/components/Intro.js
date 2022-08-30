import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Intro = () => {
  return (
    <div>
      <Container
        style={{
          maxWidth: '1400px',
          textAlign: 'center',
          paddingTop: '5vh',
          paddingBottom: '5vh'
        }}
        fluid
      >
        <Row
          style={{
            margin: 'auto',
            textAlign: 'center'
          }}
        >
          <Col style={{ marginBottom: '15px' }} md='12'>
            <img
              src='Chocon-profile.jpg'
              alt='profile pic'
              style={{
                borderRadius: '50%',
                maxWidth: '200px',
                border: '3px solid black'
              }}
            />
          </Col>
          <Col style={{ margin: 'auto' }} md='8'>
            <h5>
              Hello! I'm a Korean digital artist specializing in cute girls. I
              stream my art (and games!) Mondays-Fridays starting around 9-10am
              (PDT) on twitch. I've also started using Youtube as another avenue
              to get my content out there and grow my community. I love talking
              to chat on twitch. So come hangout or shoot me an email if you
              have a commission request!
            </h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
