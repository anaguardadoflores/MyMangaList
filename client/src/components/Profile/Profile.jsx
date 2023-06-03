import React, { useContext } from 'react';
import "./Profile.css";
import Carta from '../card/card';
import ModalBtn from '../Modal/Modal';
import { AuthContext } from './../../contexts/auth.context';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap'


const Profile = () => {

    const { user } = useContext(AuthContext);

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
                    <Button className='btnpag' href='./ProfileEdit' style={{ backgroundColor: 'pink', borderColor: 'pink' }}> Edit Profile</Button>
                </div>
            </div>
            <hr />
            <h2 className='color'><strong>My Manga Lists:</strong></h2>
            <br />
            <ModalBtn />
            <div style={{ display: 'flex' }}>
                <Carta />
                <Carta />
                <Carta />
            </div>
        </Container>

    );
}




export default Profile