import React, { useContext } from 'react';
import "./HomePage.css";
import { Button } from 'react-bootstrap';
import { AuthContext } from '../../contexts/auth.context';


const HomePage = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <div className="Home">
            <h2 className='Home'><strong>Welcome to MyMangaList!</strong></h2>
            <img src="https://i.pinimg.com/564x/c0/7a/2d/c07a2dbbf120ccc225997970ec59d58d.jpg" alt="#" className="imgHome" />
            <br />
            {
                user
                    ?
                    <>
                        <Button href="/" variant="danger" onClick={logout}>Log Out</Button>{' '}
                    </>
                    :
                    <>
                        <br />
                        <Button href="/Signup" variant="success">Sign Up</Button>{' '}
                        <Button href="/Login" variant="warning">Log In</Button>{' '}
                    </>
            }
        </div>
    )
}

export default HomePage