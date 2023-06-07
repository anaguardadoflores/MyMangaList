import React, { useContext, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from './../../contexts/auth.context';
import Card from 'react-bootstrap/Card';
import userService from "../../services/user.services"
import './card.css';

function Carta({ lists, setLists }) {

    const { user } = useContext(AuthContext);

    useEffect(() => {
        getUserLists(user._id);
    }, []);

    const getUserLists = (id) => {
        userService
            .getAllList(id)
            .then(({ data }) => setLists(data.lists.lists))
            .catch(err => console.log(err));
    };
    return (
        lists && <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {lists.map(elm => {
                return <Card style={{ width: '15rem' }} className='cardListEdit' key={elm._id}>
                    <Card.Img variant="top" src={elm.cover} className="card-image" />
                    <Card.Body>
                        <Card.Title>{elm.title}</Card.Title>
                        <hr />
                        <Link to={`/UserList/${elm._id}`} variant="primary" className='btCard'>
                            More information
                        </Link>
                    </Card.Body>
                </Card>
            })
            }
        </div>
    );
}

export default Carta;
