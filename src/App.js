import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './pages/NotFound';
import Main from './pages/Main';
import Notice from './pages/Notice';
import My from './pages/My';
import Intro from './pages/Intro';
import Login from './pages/Login';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />}/>
      <Route path='*' element={<NotFound />}/>
      <Route path='/intro' element={<Intro/>}></Route>
      <Route path='/notice' element={<Notice/>}></Route>
      <Route path='/my' element={<My/>}></Route>
      <Route path='/login' element={<Login/>}></Route>


    </Routes>
  );
}

export default App;
