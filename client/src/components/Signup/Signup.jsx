import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SignupForm from '../../components/SignupForm/SignupForm'


const Signup = () => {
    return (
        <div className='Signup'>
            <h2 className='color'><strong>SIGN UP</strong></h2>
            <hr />
            <Container>
                <Row>
                    <Col md={{ offset: 3, span: 6 }}>
                        <SignupForm />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Signup

