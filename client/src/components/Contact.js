import React from 'react';
import { Row, Col } from 'reactstrap';

const Contact = () => {
  return (
    <div style={{ backgroundColor: '#fff' }}>
      <div
        style={{
          minHeight: '75vh',
          textAlign: 'center',
          paddingTop: '15px'
        }}
      >
        <Row style={{ maxWidth: '1400px', margin: 'auto' }}>
          <Col style={{ margin: 'auto' }} md='12' lg='4'>
            <img
              style={{
                width: '100%',
                maxWidth: '434.656px',
                border: '1px solid black'
              }}
              alt='Notice img'
              src='/Notice_Images/Notice.webp'
            />
          </Col>
          <Col md='12' lg='8'>
            <Row>
              <Col
                style={{
                  margin: 'auto',
                  marginBottom: '15px',
                  textAlign: 'left'
                }}
                xs='12'
                md='12'
                lg='8'
              >
                <h1 style={{ fontSize: '3rem' }} className='display-3'>
                  ＊NOTICE＊
                </h1>{' '}
                <font color='red'>
                  <strong>All copyrights of works belong to 'Conov'</strong>
                </font>{' '}
                <br />
                * Commercial use is prohibited. (Please separate inquiry)
                <br />* Secondary processing is not available <br />* Watermark
                in pictures. (Please do not delete). <br />* Workpiece Can be
                uploaded to my SNS. <br />* It is possible to produce goods for
                private a collection. (Let me know ahead of time.) <br />*
                Please understand my painting style. (Style related feedback not
                welcome.) <br />* The operation is performed on the stream
                https://www.twitch.tv/choco_nov. <br />* Contact is active from
                dawn to morning. <br />* Refund 100% before work / Rough 80% /
                Sketch 50% / Not possible during coloring. (100% refund if my
                personal circumstances prevent me from proceeding) ​ <br />
                <br />
                <strong>※ Please contact me regarding any questions! :)</strong>
              </Col>
              <Col
                style={{ margin: 'auto', textAlign: 'left' }}
                xs='12'
                md='12'
                lg='4'
              >
                <font color='red'>
                  <strong>
                    NO) Real figures, adult males, middle aged and older, Mecha,
                    sensitive content, painting style (I can refuse at my
                    discretion.)
                  </strong>
                </font>{' '}
              </Col>
              <Col
                xs='12'
                style={{
                  marginTop: '75px',
                  marginBottom: '50px',
                  textAlign: 'left'
                }}
              >
                <h1 style={{ fontSize: '3rem' }} className='display-3'>
                  ＊COMMISSION＊{' '}
                </h1>
                <strong>* Payment is done via paypal</strong> <br />
                * The work will be received in advance, and the contact will
                proceed to open .<br />* Works with
                <strong> rough--sketch--coloring--finish</strong> Basically
                rough, sketch, complete capture will be sent. (The coloring
                process will be sent to you when you want / confirm the
                completed capture.) (Pose feedback is available only in rough,
                sketches are only available for faces and coloring.)
                <br />* <strong>Working period </strong>-The maximum one month
                is 3-7 days after starting work.
                <br />* <strong>Size </strong>-Minimum 1500px horizontal (Pose,
                depends on the presence of small items) (Resolution 300dpi){' '}
                <br />
                * Works - saved as a PNG file (if you wish, can be JPG.)
                <br />* Background not included by default. (A bed expression
                such as dakimakura is possible and there is an additional
                charge.) (A simple background and effects can be added at
                random. No additional charge.)
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Contact;
