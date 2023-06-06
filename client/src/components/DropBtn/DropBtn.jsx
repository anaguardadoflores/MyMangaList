import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from './../../contexts/auth.context';
import userService from "../../services/user.services";
import Dropdown from 'react-bootstrap/Dropdown';

function CustomDropdownButton() {
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

    const addToSelectedList = () => {
        if (selectedList) {
            console.log(`Added element to list: ${selectedList.title}`);
        }
    };

    return (
        lists && (
            <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Dropdown onSelect={(eventKey) => setSelectedList(lists.find(elm => elm._id === eventKey))}>
                    <Dropdown.Toggle style={{ backgroundColor: 'pink', borderColor: 'pink' }} id="dropdown-basic">
                        Select List
                    </Dropdown.Toggle>
                    <Dropdown.Menu onClick={addToSelectedList}>
                        {lists.map(elm => (
                            <Dropdown.Item key={elm._id} eventKey={elm._id}>{elm.title}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    );
}

export default CustomDropdownButton;

