import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useState } from 'react'
const AddBook = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submit")
    }
    console.log({title})
    console.log({price })
    return (
        <div>
            <Container md={6} className="justify-content-center mt-5">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Book Title</Form.Label>
                        <Form.Control onChange={(e) => setTitle (e.target.value)} type="text" placeholder="Enter Your Book Title" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Price</Form.Label>
                        <Form.Control onChange={(e) => setPrice (e.target.value)} type="text" placeholder="Price" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default AddBook
