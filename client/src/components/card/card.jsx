import React from 'react';
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import './card.css';

function Carta() {
    return (
        <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src="https://i.pinimg.com/564x/06/8f/b8/068fb888a7fcc91659439b43b536a106.jpg" />
                <Card.Body>
                    <Card.Title>Title</Card.Title>
                    <hr />
                    <Card.Text>Type</Card.Text>
                    <Card.Text>Status</Card.Text>

                    <Link to='/UserList' variant="primary" className='btCard'>
                        More information
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Carta;
