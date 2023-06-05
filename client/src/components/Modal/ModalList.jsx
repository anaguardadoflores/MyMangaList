import { useState } from 'react';
import { Form } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import listServices from "../../services/list.services"


function ModalList(closeModal, updateList) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleInputChange = event => {
        const { name, value } = event.target
        setShow({ ...show, [name]: value })
    }

    const handleSubmit = event => {
        event.preventDefault()

        listServices
            .saveList(show)
            .then(() => {
                closeModal()
                updateList()
            })
            .catch(err => console.log(err))
    }


    return (
        <>
            <Button variant="primary" style={{ backgroundColor: 'pink', borderColor: 'pink' }} onClick={handleShow}>
                Edit List
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit List</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="ListName">
                            <Form.Label>List Name:</Form.Label>
                            <Form.Control
                                type="ListName"
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Cover">
                            <Form.Label>Cover:</Form.Label>
                            <Form.Control
                                type="Cover"
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" style={{ backgroundColor: 'pink', borderColor: 'pink' }}>Edit ❤️</Button>
                    <Button variant="danger">Delete</Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalList;