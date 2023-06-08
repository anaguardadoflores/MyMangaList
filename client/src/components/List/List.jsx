import React, { useState, useEffect } from 'react';
import { Spinner, Container, Row, Col } from 'react-bootstrap';
import mangaService from '../../services/manga.services';
import Carta from '../mangaCard/mangaCard';
import Search from '../Search/Search';

const List = () => {
    const [titles, setTitles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [mangaBackup, setMangaBackup] = useState([]);

    useEffect(() => {
        getMangas();
    }, []);

    const getMangas = () => {
        mangaService
            .getAllMangas()
            .then(({ data }) => {
                setTitles(data.data);
                setMangaBackup(data.data);
                setIsLoading(false);
            })
            .catch(err => console.log(err));
    };

    const filterMangasBytitle = query => {
        const lowerCaseQuery = query.toLowerCase();
        const filteredManga = mangaBackup.filter(elm => elm.title.toLowerCase().includes(lowerCaseQuery));
        setTitles(filteredManga);
    };


    return (
        <div className="List">
            <Container>
                <h2 className="List" style={{ color: '#5a6993' }}>
                    <strong>MANGA LIST</strong>
                </h2>
                <hr />
                <Search filterMangasBytitle={filterMangasBytitle} />
                <br />
            </Container>
            {isLoading ? (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            ) : (
                <Row>
                    {titles.map((elm, index) => (
                        <Col key={index} xs={12} sm={6} md={4} lg={3}>
                            <Carta manga={elm} />
                        </Col>
                    ))}
                </Row>
            )}
        </div>
    );
};

export default List;
