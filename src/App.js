import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import Home from './pages/Home/Home/Home';
import NotFound from './pages/shared/NotFound/NotFound';
import Login from './pages/Home/Authentication/Login/Login';
import SignUp from './pages/Home/Authentication/SignUp/SignUp';
import PrivateRoute from './pages/Home/Authentication/PrivateRoute/PrivateRoute';
import UserDetails from './pages/UserDetails/UserDetails';
import ExplorMore from './pages/Explor-More/ExplorMore';
import Order from './pages/Order/Order';
import MyOrder from './pages/MyOrder/MyOrder';
import DashbordHome from './pages/Dashboard/Dashboard/DashbordHome';
import AddReview from './pages/Dashboard/Dashboard/AddReview';
import AllOrders from './pages/Dashboard/Dashboard/AllOrders';



function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/register' element={<SignUp></SignUp>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/myorder' element={<MyOrder></MyOrder>}></Route>
            <Route path='/explor' element={<PrivateRoute><ExplorMore /></PrivateRoute>}></Route>
            <Route path='/order/:id' element={<PrivateRoute><Order /></PrivateRoute>}></Route>
            <Route path="dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} >
              <Route path="/dashboard" element={<DashbordHome></DashbordHome>}>
              </Route>
              <Route path={`dashboard/myorder`} element={<MyOrder></MyOrder>}>

              </Route>
              <Route path={`dashboard/addreview`} element={<AddReview></AddReview>}>
              </Route>
              <Route path={`dashboard/manageallOrders`} element={<AllOrders></AllOrders>}>
              </Route>
            </Route>
            <Route path="/user" element={<UserDetails></UserDetails>}></Route>
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