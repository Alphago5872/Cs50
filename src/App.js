import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import About_me from './pages/About_me';
import Contact_me from './pages/Contact_me';
import My_current_goals from './pages/My_current_goals';
import My_hobbies from './pages/My_hobbies';
import Homepage from './pages/Homepage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/About_me' element={<About_me />} />
        <Route path='/Contact_me' element={<Contact_me />} />
        <Route path='/My_current_goals' element={<My_current_goals />} />
        <Route path='/My_hobbies' element={<My_hobbies />} />
      </Routes>
    </div>
  );
}

export default App;
