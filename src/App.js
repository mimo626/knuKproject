import { Route, Routes } from 'react-router-dom';
import './App.css';
import './components/layout/header.css';
import Layout from "./components/layout/layout.js";
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
  );
}

export default App;
