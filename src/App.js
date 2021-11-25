import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Success from "./Pages/Success/Success";
import Empty from "./Pages/Empty/Empty";
import Footer from "./Pages/Footer/Footer";
import AllTours from "./Pages/AllTours/AllTours";
import TourBooking from "./Pages/Home/TourBooking/TourBooking";
import MyBookinngs from "./Pages/MyBookinngs/MyBookinngs";
import ManageBookings from "./Pages/MangeBookings/ManageBookings";
import AddTours from "./Pages/AddTours/AddTours";
import About from "./Pages/About/About";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/allTours">
              <AllTours></AllTours>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/tour/:tourId">
              <TourBooking></TourBooking>
            </PrivateRoute>
            <PrivateRoute path="/myBookings">
              <MyBookinngs></MyBookinngs>
            </PrivateRoute>
            <PrivateRoute path="/manageBookings">
              <ManageBookings></ManageBookings>
            </PrivateRoute>
            <PrivateRoute path="/addTours">
              <AddTours></AddTours>
            </PrivateRoute>
            <PrivateRoute path="/success">
              <Success></Success>
            </PrivateRoute>
            <Route path="*">
              <Empty></Empty>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
