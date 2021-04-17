import React,  { useState } from 'react';
import { Button, Navbar, Form, FormControl} from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';

function NavBar() { 
    const [firstChar, setChar] = useState("sss");

    function setCharWarper(e){
        setChar(e.target.value)
        console.log(firstChar)

    }
    
    const bigScreen = useMediaQuery({ maxWidth: 1000 })
    if(bigScreen){
        var myStyle = {
            width: "400px"
        }
    }else{
        var myStyle = {
        
            width: "800px"
        }
    }

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Find Movie Star</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form className="mx-auto" inline>
                        <FormControl style={myStyle} type="text" placeholder="Search" className="mr-sm-2" onChange={setCharWarper}/>
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;