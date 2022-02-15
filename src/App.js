import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
<<<<<<< HEAD
import Login from './pages/Home/Authentication/LoginPage/Login';
import Registration from './pages/Home/Authentication/Registration/Registration';
import NotFound from './pages/shared/NotFound/NotFound';

=======
import AuthProvider from './Context/AuthProvider';
import Home from './pages/Home/Home/Home';
>>>>>>> d2d49ecf72324c166a102d60604c07d02c824f1d

function App() {
  return (
    <div>
<<<<<<< HEAD
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
=======
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
>>>>>>> d2d49ecf72324c166a102d60604c07d02c824f1d
    </div>
  );
}

export default App;
