import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from './../../contexts/auth.context';
import { useParams } from 'react-router-dom';
import userService from "../../services/user.services";
import Dropdown from 'react-bootstrap/Dropdown';
import listServices from '../../services/list.services';

function CustomDropdownButton({ manga }) {
    const { user } = useContext(AuthContext);
    const [lists, setLists] = useState([]);
    const [selectedList, setSelectedList] = useState(null);

    useEffect(() => {
        getUserLists(user._id);
    }, [user._id]);

    const getUserLists = (id) => {
        userService
            .getAllList(id)
            .then(({ data }) => {
                setLists(data.lists.lists);
                setSelectedList(data.lists.lists[0]);
            })
            .catch(err => console.log(err));
    };

    const addToSelectedList = (list_id) => {
        const mangaData = {
            id: manga?.mal_id,
            title: manga?.titles[0]?.title,
            images: manga?.images?.jpg?.image_url,
            type: manga?.type,
            status: manga?.status,
            score: manga?.score,
            chapters: manga?.chapters ? manga.chapters : 'N/A',
            synopsis: manga?.synopsis,
            authors: manga?.authors[0]?.name,
            genres: manga?.genres?.map((ele) => ele?.name)
        };

        listServices
            .saveManga(list_id, mangaData)
            .then(({ data }) => {
            })
            .catch(err => console.log(err));

    }

    return (
        lists && (
            <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Dropdown onSelect={(eventKey) => setSelectedList(lists.find(elm => elm._id === eventKey))}>
                    <Dropdown.Toggle style={{ backgroundColor: 'pink', borderColor: 'pink' }} id="dropdown-basic">
                        Select List
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {lists.map(elm => (
                            <Dropdown.Item key={elm._id} eventKey={elm._id} onClick={() => addToSelectedList(elm._id)}>{elm.title}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    );
}

export default CustomDropdownButton;
