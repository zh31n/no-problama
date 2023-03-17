import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreateAcc from './Components/CreateAcc/CreateAcc';
import Helper from './Components/Helper/Helper';
import Lama from './Components/Lama/Lama';
import Login from './Components/Login/Login';
import LoginPage from './Components/LoginPage/LoginPage';
import PageLogo from './Components/PageLogo/PageLogo';
import SexYear from './Components/SexYear/SexYear';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<PageLogo />} />
        <Route path='/lama' element={<Lama />} />
        <Route path='/loginPage' element={<LoginPage />} />
        <Route path='/createAcc' element={<CreateAcc />} />
        <Route path='/login' element={<Login />} />
        <Route path='/option' element={<SexYear />} />
        <Route path='/helper' element={<Helper />} />
      </Routes>
    </div>
  );
}

export default App;
