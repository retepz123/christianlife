import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import UpcomingEvents from './Components/Upcoming-events';
import FormRegistration from './Pages/formRegistration';
import Login from './Pages/login';
import Admin from './Pages/adminPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<FormRegistration />} path='/registration' />
        <Route element={<Login />} path='/login' />
        <Route element={<Admin />} path='admin' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
