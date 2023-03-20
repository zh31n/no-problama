import { Route, Routes } from 'react-router-dom';
import Dialog from '../Dialog/Dialog';
import DownNav from '../DownNav/DownNav';
import Profile from '../Profile/Profile';
import First from '../Tasks/First/First';
import Second from '../Tasks/Second/Second';
import TasksPage from '../TasksPage/TasksPage';
import s from './ProfileContainer.module.css'

const ProfileContainer = () => {
    return (
        <div className="">
            <div className='content'>
                <Routes>
                    <Route path='main' element={<Profile />} />
                    <Route path='dialog' element={<Dialog />} />
                    <Route path='tasks/main' element={<TasksPage />} />
                    <Route path='tasks/1' element={<First />} />
                    <Route path='tasks/2' element={<Second />} />
                </Routes>
            </div>
            <DownNav />
        </div>
    )
}

export default ProfileContainer;