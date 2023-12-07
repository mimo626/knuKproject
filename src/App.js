import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './pages/NotFound';
import Main from './pages/Main';
import Notice from './pages/HeaderPage/Notice';
import My from './pages/HeaderPage/My';
import Intro from './pages/HeaderPage/Intro';
import KnuLogin from './pages/HeaderPage/KnuLogin';
import FieldMajor from './pages/FieldPage/FieldMajor';
import FieldType from './pages/FieldPage/FieldType';
import FieldRead from './pages/FieldPage/FieldRead';
import FieldKeyword from './pages/FieldPage/FieldKeyword';
import NoticeCreate from './pages/HeaderPage/NoticeCreate';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />}/>
      <Route path='*' element={<NotFound />}/>
      <Route path='/main' element={<Main/>}></Route>
      <Route path='/intro' element={<Intro/>}></Route>
      <Route path='/notice' element={<Notice/>}></Route>
      <Route path='/noticecreate' element={<NoticeCreate/>}></Route>
      <Route path='/my' element={<My/>}></Route>
      <Route path='/knuLogin' element={<KnuLogin/>}></Route>
      <Route path="/field/type/:type/page/:page?" element={<FieldType/>}></Route>
      <Route path="/field/major/:major/page/:page?" element={<FieldMajor/>}></Route>
      <Route path="/field/keyword/:keyword/page/:page?" element={<FieldKeyword/>}></Route>
      <Route path="/field/read/:noticeId?" element={<FieldRead/>}></Route>
      <Route path='/noticeCreate' element={<NoticeCreate/>}></Route>
    </Routes>
  );
}

export default App;
