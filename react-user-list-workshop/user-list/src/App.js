import './App.css';
import * as userService from './services/userService.js'
import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Pagination from './components/Pagination';
import Search from './components/Search';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import UserDelete from './components/UserDelete.js';
import UserDetails from './components/UserDetails.js';
import Loading from './components/Loading.js';

function App() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [userForm, setUserForm] = useState({});
    const [showUserForm, setShowUserAdd] = useState(false);
    const [showUserDelete, setShowUserDelete] = useState(false);
    const [showUserDetails, setShowUserDetails] = useState(false);
    const [showLoading, setLoading] = useState(true);

    useEffect(() => {
        userService
            .getAll()
            .then(users => {
                // The purpost of this is to test the loading function
                setTimeout(() => {
                    setUsers(users);
                    setLoading(false);
                }, 1000);

            })
            .catch(err => console.log(err));
    }, [])

    const onChangeHandler = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);

        // setUserForm(state => state[e.target.name] = e.target.value)
    }

    const onUserAddClick = () => {
        setShowUserAdd(true);
    }

    const onUserEditClick = async (userId) => {
        const userDetails = await userService.getById(userId);

        setUser(userDetails);
        setShowUserAdd(true);
    }

    const onUserDetailsClick = async (userId) => {
        const user = await userService.getById(userId);

        setUser(user);
        setShowUserDetails(true);
    }

    const onUserDeleteClick = (userId) => {
        setShowUserDelete(true);
        setUser(userId);
    }

    const onUserDelete = async (userId) => {
        await userService.remove(userId);

        setUsers(state => state.filter(u => u._id != userId));
        onCloseClick();
    }

    const onCloseClick = () => {
        setShowUserAdd(false);
        setShowUserDelete(false);
        setShowUserDetails(false);
        setUser(null);
    }

    const onFormSubmit = async (e, userId) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const userData = Object.fromEntries(formData);

        userId
            ? await userEdit(userId, userData)
            : await userCreate(userData);

        onCloseClick();
    }

    const userCreate = async (userData) => {
        const user = await userService.create(userData);

        setUsers(state => [...state, user])
    }

    const userEdit = async (userId, userData) => {
        const updatedUser = await userService.edit(userId, userData);
        setUsers(state => state.map(x => x._id === userId ? updatedUser : x));
    }

    return (
        <div className="App">
            <Header />
            <main className="main">
                <section className="card users-container">
                    <Search />

                    {showLoading
                        ? <Loading />
                        : <UserList
                            users={users}
                            onUserAddClick={onUserAddClick}
                            onUserDeleteClick={onUserDeleteClick}
                            onUserDetailsClick={onUserDetailsClick}
                            onUserEditClick={onUserEditClick} />}
                </section>

                <Pagination />
            </main>

            {showUserForm && <UserForm
                user={user}
                onFormCloseClick={onCloseClick}
                onFormSubmit={onFormSubmit}
                onChangeHandler={onChangeHandler} />}

            {showUserDelete && <UserDelete
                onCloseClick={onCloseClick}
                onUserDelete={() => onUserDelete(user)} />}

            {showUserDetails && <UserDetails
                {...user}
                onCloseClick={onCloseClick} />}

            <Footer />
        </div>
    );
}

export default App;
