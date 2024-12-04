import React, { useState } from 'react';
import { Profile } from './Profile';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserAC } from '../../Redux/personReduser';
import { updateUsersAC } from '../../Redux/userReduser';

const ProfileContainer = () => {
    const users = useSelector(state => state.person);
    const [user, setUser] = useState({
        name: users.name,
        lastname: users.lastname,
        city: users.city,
        login: users.login,
        password: users.password,
        tel: users.tel,
    })
    const dispatch = useDispatch();
    const hendlerInput = (data, action) => {
        switch (action) {
            case 'name':
                setUser({ ...user, name: data })
                break;
            case 'lastname':
                setUser({ ...user, lastname: data })
                break;
            case 'city':
                setUser({ ...user, city: data })
                break;
            case 'login':
                setUser({ ...user, login: data })
                break;
            case 'password':
                setUser({ ...user, password: data })
                break;
            case 'tel':
                setUser({ ...user, tel: data })
                break;
            default:
                break;
        }
    }
    const updateUser = () => {
        dispatch(updateUserAC(user))
        dispatch(updateUsersAC(
            users.id,
            user))


    }
    return (
        <Profile
            user={user}
            hendlerInput={hendlerInput}
            updateUser={updateUser}
        />
    )
}

export { ProfileContainer }