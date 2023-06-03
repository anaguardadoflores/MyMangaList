import React from 'react'
import "./UserList.css";
import ModalList from '../Modal/ModalList';

function UserList() {
    return (
        <div className='UserList'>
            <h2 className='color'><strong>NOMBRE RANDOM DE LA LISTA:</strong></h2>
            <hr />
            <ModalList />
            <br />
            <img src="https://i.pinimg.com/564x/97/7b/79/977b79150b48c4112d4ee30992b192d5.jpg" alt="#" style={{ marginTop: '20px', width: '20%' }} />
            <mangaCard />

        </div>
    )
}

export default UserList