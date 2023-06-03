import { Container } from "react-bootstrap"
import NewListForm from "../../components/NewListForm/NewListForm"

const NewList = () => {

    return (
        <Container>
            <h1>New List</h1>
            <hr />
            <NewListForm />
        </Container>
    )
}

export default NewList