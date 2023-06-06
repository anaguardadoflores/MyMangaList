import { Routes, Route } from 'react-router-dom'
import HomePage from "../components/HomePage/HomePage";
import List from "../components/List/List";
import Profile from "../components/Profile/Profile";
import ProfileEdit from "../components/Profile/ProfileEdit";
import Detail from "../components/Detail/Detail";
import Signup from "../components/Signup/Signup";
import Login from "../components/Login/Login";
import UserList from "../components/UserList/UserList";
import Card from "../components/card/card";
import PrivateRoute from './PrivateRoute'
// import NewList from '../components/NewList/NewList';


const AppRoutes = () => {

    return (

        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
            <Route path="*" element={<h1>404</h1>} />

            <Route element={< PrivateRoute />}>
                <Route path="/List" element={<List />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Detail/:id" element={<Detail />} />
                <Route path="/UserList/:list_id" element={<UserList />} />
                <Route path="/ProfileEdit" element={<ProfileEdit />} />
                <Route path="/card" element={<Card />} />
            </Route >

        </Routes>

    )
}

export default AppRoutes