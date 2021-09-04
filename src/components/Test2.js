import { Form, Button, Container } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";

const Register2 = () => {
    const address_line_1Ref = useRef();
    const suburbRef = useRef();
    const cityRef = useRef();
    const postcodeRef = useRef();
    const widgetRef = useRef(null);

    const [name, setName ] = useState("");
    const [email, setEmail ] = useState("");
    const [address_line_1, setaddress] = useState("");
    const [suburb, setSuburb] = useState("");
    const [city, setCity] = useState("");
    const [postcode, setPostcode] = useState("");
    const [floor_id, setfloor_id] = useState("1");
    const [isLoading, setIsLoading] = useState(false);

    

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://api.addressfinder.io/assets/v3/widget.js';
        script.async = true;
        
        document.body.appendChild(script);
        
        return function cleanup() {
            document.body.removeChild(script);
            if (widgetRef) {
                widgetRef = null
            }
        }
    })

    function loadWidget() {
        widgetRef = new window.AddressFinder.Widget(
            document.getElementById('address_line_1Ref'),
            '9Q78RKJNEY4GLVP3MHTC',
            'NZ'
          );
          widgetRef.on('result:select', (fullAddress, metaData) => {
            const selected = new window.AddressFinder.NZSelectedAddress(fullAddress, metaData);
            address_line_1Ref.current.value = metaData.address_line_1;
            suburbRef.current.value = metaData.selected_suburb;
            cityRef.current.value = metaData.selected_city;
            postcodeRef.current.value = metaData.postcode;
          });
    }

    const handleSubmit = e => {
        e.preventDefault();


    }

    
    return (
        <div className="Home">
        <Container>
            <h1>Start Questionnaire</h1>
            <Form method="get" onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="name" required>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        autoFocus
                        name='name'
                        type='name'
            
                        onChange={e => setName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="email" required>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        name='email'
                        type='email'
     
                        onChange={e => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="Address" required>
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        autoFocus
                        name='adress'
                        id='address_line_1'
                        type="search"
                        ref={address_line_1Ref}
                        className='formInput' 
                        placeholder="Search address here..." 
                        onChange={e => setaddress(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="suburb" required>
                    <Form.Label>Suburb</Form.Label>
                    <Form.Control
                        autoFocus
                        name='suburb'
                        ref={suburbRef}
                        className='formInput' 
                        onChange={e => setaddress(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="City" required>
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        autoFocus
                        name='city'
                        ref={cityRef}
                        className='formInput' 
                        onChange={e => setCity(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="postcode" required>
                    <Form.Label>Postcode</Form.Label>
                    <Form.Control
                        autoFocus
                        name='postcode'
                        ref={postcodeRef}
                        className='formInput' 
                        onChange={e => setPostcode(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="Floor id" required>
                    <Form.Label>Floors</Form.Label>
                    <Form.Select onChange={e => setfloor_id(e.target.value)}>
                        <option id="1" value="1" name='floor_id'>1 Floor</option>
                        <option id="2" value="2" name='floor_id'>2 Floors</option>
                        <option id="3" value="3" name='floor_id'>3 Floors</option>
                        <option id="1b" value="1b" name='floor_id'>1 Floor and Basement</option>
                        <option id="2b" value="2b" name='floor_id'>2 Floors and Basement</option>
                        <option id="3b" value="3b" name='floor_id'>3 Floors and Basement</option>
                    </Form.Select>
                </Form.Group>
                <Button
                    variant="primary"
                    type="submit"
                    onClick={handleSubmit}
                    >
                    Submit
                </Button>
            </Form>
        </Container>
        </div>
    );
}

export default Register2;