import React from "react"
import {Form, Container, Button } from 'react-bootstrap'

class CheckoutForm extends React.Component {
    constructor(props) {
      super(props)
      
      this.widget = null
      this.address_line_1 = React.createRef()
      this.address_line_2 = React.createRef()
      this.suburb = React.createRef()
      this.city = React.createRef()
      this.postcode = React.createRef()
    }
    
    componentDidMount() {
      var script = document.createElement('script');
      script.src = 'https://api.addressfinder.io/assets/v3/widget.js';
      script.async = true;
      script.onload = this.loadWidget
      document.body.appendChild(script);
    }
    
    componentWillUnmount() {
      if (this.widget) {
        this.widget.destroy()
        this.widget = null
      }
    }
    
    loadWidget = () => {
      this.widget = new window.AddressFinder.Widget(
        document.getElementById('address_line_1'),
        'ADDRESSFINDER_DEMO_KEY',
        'NZ'
      );
      this.widget.on('result:select', (fullAddress, metaData) => {
        const selected = new window.AddressFinder.NZSelectedAddress(fullAddress, metaData);
        this.address_line_1.current.value = metaData.address_line_1;
        this.suburb.current.value = metaData.selected_suburb;
        this.city.current.value = metaData.selected_city;
        this.postcode.current.value = metaData.postcode;
      });
    }
  
    render() {
      return (
          <Container>
            <h1>Start Questionnaire</h1>
            <Form>
                <Form.Group size="lg" controlId="firstName" required>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        autoFocus
                        type="firstName"
                 
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="email" required>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
            
                  
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="Address" required>
                    <Form.Label>Address line</Form.Label>
                    <Form.Control
                        autoFocus
                        type="address"
          
                        type="search" 
                        id='address_line_1' 
                        className='formInput' 
                        placeholder="Search address here..." 
                        ref={this.address_line_1}
          
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="Suburb" required>
                    <Form.Label>Suburb</Form.Label>
                    <Form.Control
                        autoFocus
                        type="suburb"
                   
                        ref={this.suburb}
              
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="City" required>
                    <Form.Label>Suburb</Form.Label>
                    <Form.Control
                        autoFocus
                        type="City"
                 
                        ref={this.city}
                
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="Postcode" required>
                    <Form.Label>Postcode</Form.Label>
                    <Form.Control
                        autoFocus
                        type="City"
               
                        ref={this.postcode}
              
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="Floor id" required>
                    <Form.Label>Floors</Form.Label>
                    <Form.Select>
                        <option id="1" value="1">1 Floor</option>
                        <option id="2" value="2">2 Floors</option>
                        <option id="3" value="3">3 Floors</option>
                        <option id="1b" value="1b">1 Floor and Basement</option>
                        <option id="2b" value="2b">2 Floors and Basement</option>
                        <option id="3b" value="3b">3 Floors and Basement</option>

                    </Form.Select>
                </Form.Group>
                <Button
                    variant="primary"
                    type="submit"
              
              
                    >
                    Submit
                </Button>

            </Form>
        </Container>
      )
    }
  }
  
  export default CheckoutForm;