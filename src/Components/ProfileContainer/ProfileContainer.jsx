import { Route, Routes } from 'react-router-dom';
import DownNav from '../DownNav/DownNav';
import Profile from '../Profile/Profile';
import s from './ProfileContainer.module.css'

const ProfileContainer = () => {
    return (
        <div className="">
            <div className='content'>
                <Routes>
                    <Route path='main' element={<Profile />} />
                    <Route path='2' element={<h1>2</h1>} />
                </Routes>
            </div>
            <DownNav />
        </div>
    )
}

export default ProfileContainer;