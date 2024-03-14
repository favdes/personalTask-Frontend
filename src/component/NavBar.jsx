// import React from 'react'
import img1 from '../images/Group 2.jpg'
import img2 from '../images/Group 6.png'
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {

  
  return (
    <>
    <Navbar expand="lg" className="">
      <Container>
        <Link to="/">
          <img src={img1} alt="" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="" className='justify-content-end '>
          <Nav className="align-items-center gap-4 ">

            <Link to="/MyTask" className='nav text-decoration-none'><h5>My Task</h5></Link>
            <Link to="/NewTasks" className='nav text-decoration-none'><h5>New Tasks</h5></Link>
            {/* <Link to="/EditTask" className='nav text-decoration-none'><h5>Edit Task</h5></Link> */}
            <Nav.Link>  <img src={img2} alt="" /></Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <hr />
    

    </>
  )
}

export default NavBar