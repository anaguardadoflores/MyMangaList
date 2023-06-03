import { useContext, useState } from "react"
import { Form, Button } from "react-bootstrap"
import authService from './../../services/auth.services'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../../contexts/auth.context"

function ProfileEdit() {

    const [editData, setEditData] = useState({
        email: '',
        password: '',
        avatar: '',
        username: ''
    })

    const navigate = useNavigate()

    const { authenticateUser, storeToken } = useContext(AuthContext)

    const handleInputChange = e => {
        const { value, name } = e.target
        setEditData({ ...editData, [name]: value })
    }

    const handleSubmit = e => {

        e.preventDefault()

        authService
            .login(editData)
            .then(({ data }) => {
                storeToken(data.authToken)
                authenticateUser()
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    const { password, email, avatar, username } = editData

    return (

        <Form onSubmit={handleSubmit} style={{ color: '#5a6993' }}>
            <div className="d-flex justify-content-center">
                <div className="text-center">
                    <h2 className="color"><strong>Edit Profile:</strong></h2>
                    <hr />

                    <Form.Group className="mb-3" controlId="username">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control style={{ width: '50em' }} type="username" value={username} onChange={handleInputChange} name="username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control style={{ width: '50em' }} type="email" value={email} onChange={handleInputChange} name="email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Avatar">
                        <Form.Label>Avatar:</Form.Label>
                        <Form.Control style={{ width: '50em' }} type="avatar" value={avatar} onChange={handleInputChange} name="avatar" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control style={{ width: '50em' }} type="password" value={password} onChange={handleInputChange} name="password" />
                    </Form.Group>

                    <div className="d-grid" style={{ margin: '50px' }}>
                        <Button variant="primary" style={{ backgroundColor: 'pink', borderColor: 'pink' }} type="submit">Save Changes</Button>
                    </div>
                </div>
            </div>
        </Form>

    )
}

export default ProfileEdit