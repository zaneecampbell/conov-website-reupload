import React, { useState } from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

const Footer = () => {
  const [emailData, setEmailData] = useState({
    email: '',
    name: '',
    text: ''
  });

  const { email, name, text } = emailData;

  const onChange = e => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };

  // Send email to artist
  const onSubmit = async e => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const body = JSON.stringify({ email, name, text });
      await axios.post('/api/email/', body, config);
      console.log('success!');
      setEmailData({ ...emailData, email: '', name: '', text: '' });
    } catch (err) {
      console.log(err.response.statusText);
    }
  };

  return (
    <div style={{ background: 'rgb(251, 223, 216)' }}>
      <div
        style={{
          maxWidth: '960px',
          margin: 'auto',
          paddingBottom: '25px',
          paddingTop: '25px'
        }}
      >
        <Form
          style={{ width: '90%', margin: 'auto' }}
          onSubmit={e => onSubmit(e)}
        >
          <FormGroup row>
            <Label for='exampleEmail' sm={2}>
              Email
            </Label>
            <Col sm={8}>
              <Input
                type='email'
                name='email'
                value={email}
                id='exampleEmail'
                placeholder='Give me an e-mail to get back to you with!'
                onChange={e => onChange(e)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for='name/company' sm={2}>
              Name/Company
            </Label>
            <Col sm={8}>
              <Input
                type='text'
                name='name'
                value={name}
                id='name/company'
                placeholder='Enter your Name or Company!'
                onChange={e => onChange(e)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for='exampleText' sm={2}>
              Text Area
            </Label>
            <Col sm={8}>
              <Input
                type='textarea'
                name='text'
                value={text}
                id='exampleText'
                placeholder='Give me an idea of what you want! Including character, pose, and emotion.'
                onChange={e => onChange(e)}
              />
            </Col>
          </FormGroup>
          <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button>Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
};

export default Footer;
