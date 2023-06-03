import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import authService from './../../services/auth.services'
import { useNavigate } from "react-router-dom"

const SignupForm = () => {

    const [signupData, setSignupData] = useState({
        username: '',
        email: '',
        password: '',
        avatar: ''
    })

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { value, name } = e.target
        setSignupData({ ...signupData, [name]: value })
    }

    const handleSubmit = e => {

        e.preventDefault()

        authService
            .signup(signupData)
            .then(({ data }) => navigate('/Login'))
            .catch(err => console.log(err))
    }


    const { username, password, email, avatar } = signupData

    return (

        <Form onSubmit={handleSubmit} style={{ color: '#5a6993' }}>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" value={email} onChange={handleInputChange} name="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username:</Form.Label>
                <Form.Control type="text" value={username} onChange={handleInputChange} name="username" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" value={password} onChange={handleInputChange} name="password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="avatar">
                <Form.Label>URL Profile Photo:</Form.Label>
                <Form.Control type="avatar" value={avatar} onChange={handleInputChange} name="avatar" />
            </Form.Group>

            <div className="d-grid" style={{ margin: '50px' }}>
                <Button variant="primary" style={{ backgroundColor: 'pink', borderColor: 'pink' }} type="submit">Sign Up</Button>
            </div>

        </Form>
    )
}

export default SignupForm