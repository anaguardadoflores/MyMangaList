import React, { useContext, useState } from 'react';
import "./Profile.css";
import Carta from '../card/card';
import ModalBtn from '../Modal/Modal';
import { AuthContext } from './../../contexts/auth.context';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'


const Profile = () => {

    const { user } = useContext(AuthContext);

    const [lists, setLists] = useState([]);

    return (
        <Container>
            <div className="profile-container">
                <div className="left-column">
                    <h2 className='color'><strong>My Profile:</strong></h2>
                    {
                        user && <img src={user.avatar} alt="#" className="avatarImg" />
                    }
                </div>
                <div className="right-column">
                    {
                        user && <li className='color'><strong>Username:</strong> {user.username}</li>
                    }
                    {
                        user && <li className='color'><strong>Email:</strong> {user.email}</li>
                    }
                    <br />
                    <Link to='/ProfileEdit' className='btnEdit'>
                        Edit Profile
                    </Link>
                </div>
            </div>
            <hr />
            <h2 className='color'><strong>My Manga Lists:</strong></h2>
            <br />
            <ModalBtn lists={lists} setLists={setLists} />
            <div style={{ display: 'flex' }}>
                <Carta lists={lists} setLists={setLists} />
            </div>
        </Container>

    );
}




export default Profile