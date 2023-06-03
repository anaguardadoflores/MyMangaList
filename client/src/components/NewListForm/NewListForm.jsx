import { useState } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import listServices from "../../services/list.services"

const NewListForm = ({ closeModal, updateList }) => {

    const [listData, setlistData] = useState({
        title: '',
        content: '',
        cover: ''
    })

    const handleInputChange = event => {
        const { name, value } = event.target
        setlistData({ ...listData, [name]: value })
    }

    const handleSubmit = event => {
        event.preventDefault()

        listServices
            .saveList(listData)
            .then(() => {
                closeModal()
                updateList()
            })
            .catch(err => console.log(err))
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Title:</Form.Label>
                {/* <Form.Control type="text" value={List.title} onChange={handleInputChange} name="title" /> */}
            </Form.Group>
            <Form.Group className="mb-3" controlId="cover">
                <Form.Label>Cover (URL):</Form.Label>
                {/* <Form.Control type="text" value={list.cover} onChange={handleInputChange} name="cover" /> */}
            </Form.Group>
            <Form.Group className="mb-3" controlId="content">
                <Form.Label>Content:</Form.Label>
                {/* <Form.Control type="text" value={List.content} onChange={handleInputChange} name="content" /> */}
            </Form.Group>

            <div className="d-grid mt-3">
                <Button variant="dark" type="submit">Create new list</Button>
            </div>
        </Form>
    )
}

export default NewListForm