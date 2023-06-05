import { useContext, useState } from "react"
import { Form, Button } from 'react-bootstrap';
import listServices from './../../services/list.services';
import Modal from 'react-bootstrap/Modal';
import { AuthContext } from '../../contexts/auth.context';


function ModalBtn() {

    const [show, setShow] = useState(false);

    const [formData, setFormData] = useState({ title: "", cover: "" });

    const { user } = useContext(AuthContext);


    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);


    const handleInputChange = e => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        listServices
            .createList(user._id, formData)
            .then(() => {
                handleClose()
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <Button variant="primary" style={{ backgroundColor: 'pink', borderColor: 'pink' }} onClick={handleShow}> + Create a new List</Button>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>New List ❤️</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="ListName">
                            <Form.Label>List Name:</Form.Label>
                            <Form.Control type="text" name="title" value={formData.title} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Cover">
                            <Form.Label>Cover:</Form.Label>
                            <Form.Control type="URL" name="cover" value={formData.cover} onChange={handleInputChange} />
                        </Form.Group>

                        <div className="d-grid mt-3">
                            <Button variant="warning" style={{ backgroundColor: 'pink', borderColor: 'pink', marginLeft: '10px' }} type="submit">Create ❤️</Button>
                            <Button variant="secondary" style={{ marginTop: '10px' }} onClick={handleClose}>Close</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalBtn;
