import { useContext, useState } from "react"
import { Form, Button } from "react-bootstrap"
import userService from './../../services/user.services'
import { useNavigate, Link } from 'react-router-dom'
import { AuthContext } from "../../contexts/auth.context"
import "./Profile.css";

function ProfileEdit() {

    const { user } = useContext(AuthContext);

    const [editData, setEditData] = useState({
        email: user.email,
        avatar: user.avatar,
        username: user.username,
    })

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { value, name } = e.target
        setEditData({ ...editData, [name]: value })
    }

    const handleSubmit = e => {

        e.preventDefault()

        console.log(editData, user._id)

        userService
            .editPost(editData, user._id)
            .then(() => navigate('/Profile'))
            .catch(err => console.log(err))
    }

    const { email, avatar, username } = editData

    return (
        <>
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
                            <Form.Control style={{ width: '50em' }} type="URL" value={avatar} onChange={handleInputChange} name="avatar" />
                        </Form.Group>

                        <div className="d-grid" style={{ margin: '50px' }}>
                            <Button variant="primary" style={{ backgroundColor: 'pink', borderColor: 'pink' }} type="submit">Save Changes</Button>
                        </div>
                    </div>
                </div>
            </Form>
        </>

    )
}

export default ProfileEdit