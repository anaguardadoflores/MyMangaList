import React from 'react'
import "./Login.css";
import { Container, Row, Col } from 'react-bootstrap'
import LoginForm from '../../components/LoginForm/LoginForm'

const Login = () => {
    return (
        <div className='Login'>
            <h2 className='Login'><strong>LOG IN</strong></h2>
            <Container>
                <Row>
                    <Col md={{ offset: 3, span: 6 }}>
                        <hr />
                        <LoginForm />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login