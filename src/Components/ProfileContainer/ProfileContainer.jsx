import { Route, Routes } from 'react-router-dom';
import Dialog from '../Dialog/Dialog';
import DownNav from '../DownNav/DownNav';
import Profile from '../Profile/Profile';
import s from './ProfileContainer.module.css'

const ProfileContainer = () => {
    return (
        <div className="">
            <div className='content'>
                <Routes>
                    <Route path='main' element={<Profile />} />
                    <Route path='dialog' element={<Dialog />} />
                    <Route path='tasks' element={<h1>3</h1>} />
                </Routes>
            </div>
            <DownNav />
        </div>
    )
}

export default ProfileContainer;