import React from 'react'
import { Container, Navbar , Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MyNavbar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Link to={`/`}>  <Navbar.Brand href="#home">Book Store</Navbar.Brand> </Link>
                    <Nav className="me-auto">
                       {/* <Link to="/"><Nav>Book Store</Nav></Link> */}
                       <Link to={`/addbooks`}><Nav>Add Books</Nav></Link>
                       <Link to={`/booklist`}><Nav>Book Lists</Nav></Link>
                       
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default MyNavbar
