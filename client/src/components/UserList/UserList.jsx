import React, { useState, useEffect } from 'react';
import { Spinner, Container, Row, Col, Button } from 'react-bootstrap';
import mangaService from '../../services/manga.services';
import Carta from '../mangaCard/mangaCard';
import "./UserList.css";
import { useParams, Link } from 'react-router-dom';
import listServices from '../../services/list.services';
import ModalList from '../Modal/ModalList';

function UserList() {

    const [titles, setTitles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [list, setList] = useState([]);

    const { list_id } = useParams()

    useEffect(() => {
        getMangas();
        getUserList();
    }, []);

    const getMangas = () => {
        mangaService
            .getAllMangas()
            .then(({ data }) => {
                setTitles(data.data);
                setIsLoading(false);
            })
            .catch(err => console.log(err));
    };

    const getUserList = () => {

        listServices
            .editGet(list_id)
            .then(({ data }) => {
                setList(data.list)
            })
            .catch(err => console.log(err));
    };
    return (
        <div className="List">
            <Container>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h2 className="List" style={{ color: '#5a6993', textAlign: 'center', margin: '0 auto' }}>
                        <strong>{list.title}</strong>
                    </h2>
                    <Link to="/Profile">
                        <Button variant="primary" style={{ backgroundColor: 'purple', borderColor: 'purple', paddingLeft: '20px', paddingRight: '20px', marginRight: '30px' }}>Back</Button>
                    </Link>
                </div>
                <hr />
                <ModalList />
                <br />
            </Container>

            {isLoading ? (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            ) : (
                <Row>
                    {list.content.map((elm, index) => (
                        <Col key={index} xs={12} sm={6} md={4} lg={3}>
                            <Carta manga={elm} />
                        </Col>
                    ))}
                </Row>
            )}
        </div>
    )

}

export default UserList