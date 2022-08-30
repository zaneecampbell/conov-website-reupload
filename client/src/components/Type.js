import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Type = () => {
  return (
    <div style={{ paddingBottom: '30px', marginTop: '50px' }}>
      <Container style={{ textAlign: 'center' }} fluid>
        <h1
          style={{ marginBottom: '25px', fontSize: '4rem' }}
          className='display-3'
        >
          Type Comparison
        </h1>
        <img
          style={{ width: '100%', maxWidth: '1100px' }}
          src='Commission.webp'
          alt='Comparison of different commission types'
        />
        <Row
          style={{
            maxWidth: '1100px',
            margin: 'auto',
            paddingBottom: '15px',
            background: 'grey',
            opacity: '0.7'
          }}
        >
          <Col xs='4'>
            <strong>
              <h3>Type A</h3>
              <span style={{ fontSize: '.85rem' }}>
                <div>Half body $110/ Full body $150 (Tax incl.)</div>
                <div>Extra Props $5-$30</div>
                <div>Simple style</div>
                <div>Simple shading/ Highlights</div>
              </span>
            </strong>
          </Col>
          <Col xs='4'>
            <strong>
              <h3>Type B</h3>
              <span style={{ fontSize: '.85rem' }}>
                <div>Half body $130/ Full body $170 (Tax incl.)</div>
                <div>Extra Props $5-$30</div>
                <div>Illustration style</div>
                <div>More color then Type A</div>
              </span>
            </strong>
          </Col>
          <Col xs='4'>
            <strong>
              <h3>Type C</h3>
              <span style={{ fontSize: '.85rem' }}>
                <div>Half body $200/ Full body $240 (Tax incl.)</div>
                <div>Extra Props $10-$50</div>
                <div>Full style</div>
                <div>Vibrant shading and highlights</div>
              </span>
            </strong>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Type;
