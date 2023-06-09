import React, { useContext } from 'react';
import "./HomePage.css";
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.context';


const HomePage = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <div className="Home">
            <h2 className='Home'><strong>Welcome to MyMangaList!</strong></h2>
            <img src="https://i.postimg.cc/hPTvz0nZ/homepage-IMG.png" alt="#" className="imgHome" />
            <br />
            {
                user
                    ?
                    <>
                        <Link to='/' variant="danger" className='btMore' onClick={logout}>Log Out</Link>

                    </>
                    :
                    <>
                        <br />
                        <Link to='/Signup' variant="success" className='btMoreS'>Sign Up</Link>
                        <Link to='/Login' className='btMoreW' variant="warning">Log In</Link>
                    </>
            }
        </div>
    )
}

export default HomePage