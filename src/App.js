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
import DashbordHome from './pages/Dashboard/Dashboard/DashbordHome';
import AddReview from './pages/Dashboard/Dashboard/AddReview';
import AllOrders from './pages/Dashboard/Dashboard/AllOrders';
import MakeAdmin from './pages/Dashboard/Dashboard/MakeAdmin';
import AddProduct from './pages/Dashboard/Dashboard/AddProduct';
import MyOrder from './pages/MyOrder/MyOrder';
import About from './pages/AboutUs/FrequentlyAskedQues/About';
import ManageAllOrders from './pages/Dashboard/ManageAllOrders/ManageAllOrders';



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
            <Route path='/about' element={<About></About>}></Route>
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
              <Route path={`dashboard/makeadmin`} element={<MakeAdmin></MakeAdmin>}></Route>
              <Route path={`dashboard/addproduct`} element={<AddProduct></AddProduct>}></Route>
              <Route path={`dashboard/manageproduct`} element={<ManageAllOrders></ManageAllOrders>}></Route>
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