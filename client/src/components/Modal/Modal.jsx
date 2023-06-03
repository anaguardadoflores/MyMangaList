import { useState } from 'react';
import { Form } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalBtn() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" style={{ backgroundColor: 'pink', borderColor: 'pink' }} onClick={handleShow}>
                + Create a new List
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>New List ❤️</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="ListName">
                            <Form.Label>List Name:</Form.Label>
                            <Form.Control
                                type="ListName"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Cover">
                            <Form.Label>Cover:</Form.Label>
                            <Form.Control
                                type="Cover"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="warning" style={{ backgroundColor: 'pink', borderColor: 'pink' }}>Create ❤️</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalBtn;