import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './pages/NotFound';
import Main from './pages/Main';
import Notice from './pages/HeaderPage/Notice';
import My from './pages/HeaderPage/My';
import Intro from './pages/HeaderPage/Intro';
import Login from './pages/HeaderPage/Login';
<<<<<<< HEAD
import MajorType from './pages/MajorPage/MajorType';
=======
>>>>>>> 28088d1ee3704929aa9d2087329274b0b52df06f
import FieldMajor from './pages/FieldPage/FieldMajor';
import FieldType from './pages/FieldPage/FieldType';
import FieldRead from './pages/FieldPage/FieldRead';






function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />}/>
      <Route path='*' element={<NotFound />}/>
      <Route path='/main' element={<Main/>}></Route>
      <Route path='/intro' element={<Intro/>}></Route>
      <Route path='/notice' element={<Notice/>}></Route>
      <Route path='/my' element={<My/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
<<<<<<< HEAD
      <Route path="/major/type/:type?" element={<MajorType/>}></Route>

      <Route path="/field/type/:type?" element={<FieldType/>}></Route>
      <Route path="/field/major/:major?" element={<FieldMajor/>}></Route>
=======
      <Route path="/field/type/:type/page/:page?" element={<FieldType/>}></Route>
      <Route path="/field/major/:major/page/:page?" element={<FieldMajor/>}></Route>
>>>>>>> 28088d1ee3704929aa9d2087329274b0b52df06f
      <Route path="/field/read/:noticeId?" element={<FieldRead/>}></Route>
    </Routes>
  );
}

export default App;
