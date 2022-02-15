import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Login from './pages/Home/Authentication/LoginPage/Login';
import Registration from './pages/Home/Authentication/Registration/Registration';
import Home from './pages/Home/Home/Home';
import NotFound from './pages/shared/NotFound/NotFound';


function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/register' element={<Registration></Registration>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/*' element={<NotFound></NotFound>}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;

// {/* <AuthProvider>
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<Home></Home>}></Route>
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Registration />} />
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </BrowserRouter>
//       </AuthProvider> */}