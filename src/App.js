import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './pages/NotFound';
import Main from './pages/Main';
import Notice from './pages/HeaderPage/Notice';
import My from './pages/HeaderPage/My';
import Intro from './pages/HeaderPage/Intro';
import Login from './pages/HeaderPage/Login';
import MajorEngineer from './pages/MajorPage/MajorEngineer';
import MajorWelfare from './pages/MajorPage/MajorWelfare';
import MajorGlobal from './pages/MajorPage/MajorGlobal';
import MajorManage from './pages/MajorPage/MajorManage';
import MajorEdu from './pages/MajorPage/MajorEdu';
import FieldMajor from './pages/FieldPage/FieldMajor';
import FieldType from './pages/FieldPage/FieldType';
import FieldRead from './pages/FieldPage/FieldRead';






function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />}/>
      <Route path='*' element={<NotFound />}/>
      <Route path='/intro' element={<Intro/>}></Route>
      <Route path='/notice' element={<Notice/>}></Route>
      <Route path='/my' element={<My/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/majorEngineer' element={<MajorEngineer/>}></Route>
      <Route path='/majorWelfare' element={<MajorWelfare/>}></Route>
      <Route path='/majorGlobal' element={<MajorGlobal/>}></Route>
      <Route path='/majorManage' element={<MajorManage/>}></Route>
      <Route path='/majorEdu' element={<MajorEdu/>}></Route>

      <Route path="/field/type/:type?" element={<FieldType/>}></Route>
      <Route path="/field/major/:major?" element={<FieldMajor/>}></Route>
      <Route path="/field/read/:noticeId?" element={<FieldRead/>}></Route>
    </Routes>
  );
}

export default App;
