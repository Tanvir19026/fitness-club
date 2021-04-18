
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import OrderInfo from './components/Home/Home/OrderInfo/OrderInfo';
import AddReview from './components/Home/Review/AddReview';
import ManageService from './components/ManageService';
import AddProducts from './components/AddProducts/AddProducts';
import DashBoard from './components/DashBoard/DashBoard';
import SpecificOrder from './components/Orderlist/SpecificOrder';
import Admin from './components/Admin/Admin';
import Orderlist from './components/Orderlist/Orderlist';




export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Switch>
      <Route exact path="/">
         <Home></Home>
         </Route>
         <Route path="/login">
            <Login></Login>
          </Route>
        <PrivateRoute path="/OrderInfo/:name">
       <OrderInfo></OrderInfo>
        </PrivateRoute>
      
        <PrivateRoute path="/addReview">
      <AddReview></AddReview>
        </PrivateRoute>
        
        <PrivateRoute path="/manageinventory">
      <ManageService></ManageService>
        </PrivateRoute>
        
        <PrivateRoute path="/DashBoard">
      <DashBoard></DashBoard>
        </PrivateRoute>
       
        <PrivateRoute path="/addproducts">
      <AddProducts></AddProducts>
        </PrivateRoute>
        <PrivateRoute path="/manageinventory">
      <ManageService></ManageService>
        </PrivateRoute>

        <PrivateRoute path="/specificOrder">
        <SpecificOrder></SpecificOrder>
        </PrivateRoute>
        <PrivateRoute path="/admin">
        <Admin></Admin>
        </PrivateRoute>
        <PrivateRoute path="/orderlist">
       <Orderlist></Orderlist>
        </PrivateRoute>
      </Switch>




      </Router>
      </UserContext.Provider>
  );
}

export default App;
