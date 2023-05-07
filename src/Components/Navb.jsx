import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar } from 'react-bootstrap'
import '../App.css';

function Navb() {
  return (
   <>
   <Navbar bg="dark">
        <Container id="mid">
          <Navbar.Brand href="/">
           
           <div className='text1'>
            <div className='text1'>
              <h1 className="text">Movie List</h1>
           </div>
           </div>
           
          </Navbar.Brand>
        </Container>
      </Navbar>
   </>
  )
}

export default Navb