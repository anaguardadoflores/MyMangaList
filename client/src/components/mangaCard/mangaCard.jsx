import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import './mangaCard.css';

function mangaCard({ manga }) {
    return (

        <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={manga.images.jpg?.image_url ? manga.images.jpg.image_url : manga.images[0]} />
                <Card.Body>
                    <Card.Title>{manga.title}</Card.Title>
                    <hr />
                    <Card.Text>Type: {manga.type}</Card.Text>
                    <Card.Text>Status: {manga.status}</Card.Text>
                    <Card.Text>Chapters:{manga.chapters && manga.chapters.length ? manga.chapters : 'N/A'}</Card.Text>
                    <Card.Text>Score: {manga.score}</Card.Text>
                    <Link to={`/Detail/${manga.id || manga.mal_id}`} variant="primary" className='btMangaCard'>
                        More information
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default mangaCard;
