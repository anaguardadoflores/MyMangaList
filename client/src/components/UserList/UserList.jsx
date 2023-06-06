import React, { useState, useEffect, useContext } from 'react';
import { Spinner, Container, Row, Col } from 'react-bootstrap';
import mangaService from '../../services/manga.services';
import Carta from '../mangaCard/mangaCard';
import "./UserList.css";
import { useParams } from 'react-router-dom';
import listServices from '../../services/list.services';

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
                <h2 className="List" style={{ color: '#5a6993' }}><strong>{list.title}</strong></h2>
                <hr />
            </Container>
            {isLoading ? (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            ) : (
                <Row>
                    {/* {titles.map((elm, index) => (
                        <Col key={index} xs={12} sm={6} md={4} lg={3}>
                            <Carta manga={elm} />
                        </Col>
                    ))} */}
                </Row>
            )}
        </div>
    )

}

export default UserList