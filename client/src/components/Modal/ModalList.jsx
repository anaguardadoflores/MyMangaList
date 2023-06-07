import React, { useContext, useState } from "react";
import { Form, Button } from 'react-bootstrap';
import listServices from './../../services/list.services';
import Modal from 'react-bootstrap/Modal';
import { AuthContext } from '../../contexts/auth.context';
import { useParams, useNavigate, Link } from 'react-router-dom';

function ModalBtn({ lists, setLists }) {
    const [show, setShow] = useState(false);
    const { list_id } = useParams();
    const { user } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        title: "",
        cover: ""
    });

    const navigate = useNavigate();

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleInputChange = e => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleDelete = () => {
        listServices
            .delete(list_id)
            .then(data => {
                setLists(data?.data?.lists);
                navigate('/Profile');
            })
            .catch(err => console.log(err));
    };

    const handleSubmit = event => {

        event.preventDefault();
        listServices
            .editPost(formData, list_id)
            .then(data => {
                navigate('/Profile');
            })
            .catch(err => console.log(err));
    };

    const { title, cover } = formData

    return (
        <>
            <Button variant="primary" style={{ backgroundColor: 'pink', borderColor: 'pink' }} onClick={handleShow}>
                Edit List
            </Button>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit List ❤️</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="ListName">
                            <Form.Label>List Name:</Form.Label>
                            <Form.Control type="text" name="title" value={title} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Cover">
                            <Form.Label>Cover:</Form.Label>
                            <Form.Control type="URL" name="cover" value={cover} onChange={handleInputChange} />
                        </Form.Group>

                        <div className="d-grid mt-3">
                            <Link to='/Profile'>
                                <Button variant="warning" style={{ backgroundColor: 'pink', borderColor: 'pink', marginTop: '10px', width: '100%' }} type="submit" onClick={handleSubmit}>Edit ❤️</Button>
                            </Link>
                            <Link to='/Profile' >
                                <Button variant="danger" style={{ marginTop: '10px', width: '100%' }} onClick={handleDelete}>
                                    Delete
                                </Button>
                            </Link>
                            <Button variant="secondary" style={{ marginTop: '10px' }} onClick={handleClose}>
                                Close
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );

}

export default ModalBtn;
