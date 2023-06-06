import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import mangaService from '../../services/manga.services';
import CustomDropdownButton from '../DropBtn/DropBtn';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Detail.css';

const Detail = () => {

    const { id } = useParams()

    const [manga, setManga] = useState(null)

    useEffect(() => {
        findManga()
    }, [])


    const findManga = () => {
        mangaService
            .findById(id)
            .then(({ data }) => setManga(data.data))
            .catch(err => console.log(err))
    }

    return (

        manga &&
        <div className='Detail'>

            <div className="left-column">
                <h2 className='color'><strong>Manga Detail:</strong></h2>
                <br />
                <img src={manga.images.jpg.image_url} alt="#" />
            </div>
            <div className="right-column">
                <div className="color">
                    <h2 className='color'> <strong>{manga.title}</strong></h2>
                    <hr />
                    <p><strong>Type:</strong>{manga.type}</p>
                    <p><strong>Authors:</strong>
                        {manga.authors.map(author => (
                            <span key={author.mal_id}> {author.name}</span>
                        ))}
                    </p>
                    <p><strong>Genre:</strong>
                        {manga.genres.map(genres => (
                            <span key={genres.mal_id}> {genres.name}</span>
                        ))}
                    </p>
                    <p><strong>Status:</strong>{manga.status}</p>
                    <p><strong>Score:</strong>{manga.score}</p>
                    <p><strong>Chapters: </strong>{manga.chapters && manga.chapters.length ? manga.chapters : 'N/A'}</p>
                    <p><strong>Synopsis:</strong>{manga.synopsis}</p>
                </div>
            </div>
            <CustomDropdownButton manga={manga} />
            <hr />
            <Link to="/List">
                <Button variant="primary" style={{ backgroundColor: 'purple', borderColor: 'purple', paddingLeft: '20px', paddingRight: '20px' }}>Back</Button>
            </Link>
        </div>
    )
}

export default Detail