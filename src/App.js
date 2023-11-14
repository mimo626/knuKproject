import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './pages/NotFound';
import Main from './pages/Main';
import Notice from './pages/Notice';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />}/>
      <Route path='*' element={<NotFound />}/>
      <Route path='/notice' element={<Notice/>}></Route>
    </Routes>
  );
}

export default App;
