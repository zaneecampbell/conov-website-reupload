import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col
} from 'reactstrap';

const Portfolio = () => {
  return (
    <div style={{ backgroundColor: '#fff' }}>
      <div
        style={{
          minHeight: '75vh',
          textAlign: 'center',
          paddingTop: '15px',
          paddingBottom: '15px',
          maxWidth: '1400px',
          margin: 'auto'
        }}
      >
        <h1
          style={{ marginBottom: '25px', fontSize: '4rem' }}
          className='display-3'
        >
          Portfolio
        </h1>
        <Row style={{ width: '100%', margin: 'auto' }}>
          <Col xs={12} md={6} lg={4}>
            <a
              href='/FullSize_Images/Berong_Jusser_Commission.png'
              target='_blank'
            >
              <Card
                style={{
                  maxWidth: '318px',
                  margin: '15px',
                  display: 'inline-block'
                }}
              >
                <CardImg
                  top
                  width='100%'
                  src='/Portfolio_Thumbs/Berong_Jusser_Commission.png'
                  alt='Berong Jusser'
                />
                <CardBody
                  style={{
                    background: 'grey',
                    opacity: '0.7',
                    color: 'black',
                    fontSize: '1.5rem'
                  }}
                >
                  <CardTitle>Berong Jusser</CardTitle>
                  <CardSubtitle>Commission</CardSubtitle>
                </CardBody>
              </Card>
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href='/FullSize_Images/Nonno_OC.png' target='_blank'>
              <Card
                style={{
                  maxWidth: '318px',
                  margin: '15px',
                  display: 'inline-block'
                }}
              >
                <CardImg
                  top
                  width='100%'
                  src='/Portfolio_Thumbs/Nonno_OC.png'
                  alt='Nonno OC'
                />
                <CardBody
                  style={{
                    background: 'grey',
                    opacity: '0.7',
                    color: 'black',
                    fontSize: '1.5rem'
                  }}
                >
                  <CardTitle>Nonno</CardTitle>
                  <CardSubtitle>OC</CardSubtitle>
                </CardBody>
              </Card>
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href='/FullSize_Images/Milim_Commission.png' target='_blank'>
              <Card
                style={{
                  maxWidth: '318px',
                  margin: '15px',
                  display: 'inline-block'
                }}
              >
                <CardImg
                  top
                  width='100%'
                  src='/Portfolio_Thumbs/Milim_Commission.png'
                  alt='Milim Commission'
                />
                <CardBody
                  style={{
                    background: 'grey',
                    opacity: '0.7',
                    color: 'black',
                    fontSize: '1.5rem'
                  }}
                >
                  <CardTitle>Milim</CardTitle>
                  <CardSubtitle>Commission</CardSubtitle>
                </CardBody>
              </Card>
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a
              href='/FullSize_Images/Ushiwakamaru_Commission.png'
              target='_blank'
            >
              <Card
                style={{
                  maxWidth: '318px',
                  margin: '15px',
                  display: 'inline-block'
                }}
              >
                <CardImg
                  top
                  width='100%'
                  src='/Portfolio_Thumbs/Ushiwakamaru_Commission.png'
                  alt='Berong Jusser'
                />
                <CardBody
                  style={{
                    background: 'grey',
                    opacity: '0.7',
                    color: 'black',
                    fontSize: '1.5rem'
                  }}
                >
                  <CardTitle>Ushiwakamaru</CardTitle>
                  <CardSubtitle>Commission</CardSubtitle>
                </CardBody>
              </Card>
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a
              href='/FullSize_Images/Maplestory_Commission.png'
              target='_blank'
            >
              <Card
                style={{
                  maxWidth: '318px',
                  margin: '15px',
                  display: 'inline-block'
                }}
              >
                <CardImg
                  top
                  width='100%'
                  src='/Portfolio_Thumbs/Maplestory_Commission.png'
                  alt='Berong Jusser'
                />
                <CardBody
                  style={{
                    background: 'grey',
                    opacity: '0.7',
                    color: 'black',
                    fontSize: '1.5rem'
                  }}
                >
                  <CardTitle>Maplestory OC</CardTitle>
                  <CardSubtitle>Commission</CardSubtitle>
                </CardBody>
              </Card>
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href='/FullSize_Images/Neets_Free_OC.png' target='_blank'>
              <Card
                style={{
                  maxWidth: '318px',
                  margin: '15px',
                  display: 'inline-block'
                }}
              >
                <CardImg
                  top
                  width='100%'
                  src='/Portfolio_Thumbs/Neets_Free_OC.png'
                  alt='Berong Jusser'
                />
                <CardBody
                  style={{
                    background: 'grey',
                    opacity: '0.7',
                    color: 'black',
                    fontSize: '1.5rem'
                  }}
                >
                  <CardTitle>Neets Free</CardTitle>
                  <CardSubtitle>OC</CardSubtitle>
                </CardBody>
              </Card>
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href='/FullSize_Images/Minor_Commission.png' target='_blank'>
              <Card
                style={{
                  maxWidth: '318px',
                  margin: '15px',
                  display: 'inline-block'
                }}
              >
                <CardImg
                  top
                  width='100%'
                  src='/Portfolio_Thumbs/Minor_Commission.png'
                  alt='Berong Jusser'
                />
                <CardBody
                  style={{
                    background: 'grey',
                    opacity: '0.7',
                    color: 'black',
                    fontSize: '1.5rem'
                  }}
                >
                  <CardTitle>Minor</CardTitle>
                  <CardSubtitle>Commission</CardSubtitle>
                </CardBody>
              </Card>
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href='/FullSize_Images/D.VA_Fanart.png' target='_blank'>
              <Card
                style={{
                  maxWidth: '318px',
                  margin: '15px',
                  display: 'inline-block'
                }}
              >
                <CardImg
                  top
                  width='100%'
                  src='/Portfolio_Thumbs/D.VA_Fanart.png'
                  alt='Berong Jusser'
                />
                <CardBody
                  style={{
                    background: 'grey',
                    opacity: '0.7',
                    color: 'black',
                    fontSize: '1.5rem'
                  }}
                >
                  <CardTitle>D.VA Waveracer</CardTitle>
                  <CardSubtitle>Fanart</CardSubtitle>
                </CardBody>
              </Card>
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href='/FullSize_Images/D.VA_Fanart_2.png' target='_blank'>
              <Card
                style={{
                  maxWidth: '318px',
                  margin: '15px',
                  display: 'inline-block'
                }}
              >
                <CardImg
                  top
                  width='100%'
                  src='/Portfolio_Thumbs/D.VA_Fanart_2.png'
                  alt='Berong Jusser'
                />
                <CardBody
                  style={{
                    background: 'grey',
                    opacity: '0.7',
                    color: 'black',
                    fontSize: '1.5rem'
                  }}
                >
                  <CardTitle>D.VA</CardTitle>
                  <CardSubtitle>Fanart</CardSubtitle>
                </CardBody>
              </Card>
            </a>
          </Col>
          <Col xs={12}>
            <a href='/FullSize_Images/Sinon_Fanart.jpg' target='_blank'>
              <Card
                style={{
                  width: '80%',
                  margin: '15px',
                  display: 'inline-block'
                }}
              >
                <CardImg
                  top
                  width='100%'
                  src='/Portfolio_Thumbs/Sinon_Fanart.png'
                  alt='Berong Jusser'
                />
                <CardBody
                  style={{
                    background: 'grey',
                    opacity: '0.7',
                    color: 'black',
                    fontSize: '1.5rem'
                  }}
                >
                  <CardTitle>Sinon</CardTitle>
                  <CardSubtitle>Commission</CardSubtitle>
                </CardBody>
              </Card>
            </a>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Portfolio;
