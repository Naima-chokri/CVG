import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Footer from "./Layouts/Footer";
import NavBar from "./Layouts/NavBar";
import Search from "./Pages/Search";
import Profile from "./Pages/Profile";
import ItemRide from "./Pages/ItemRide";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import PublishRide from "./Pages/PublishRide/PublishRide";
import Dashboard from "./Pages/Dashboard";
import Settings from "./Pages/Setting";
import SingleCustomer from "./Pages/SingleCustomer/SingleCustomer";
import CustomerList from "./Pages/CustomerList/CustomerList";
import UserList from "./Pages/UserList/UserList";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/ItemRide" element={<ItemRide />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/PublishRide" element={<PublishRide />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Setting" element={<Settings />} />
        {/* <Route path="/Single" element={<SingleCustomer />} /> */}
        <Route path="/CustomerList" element={<CustomerList />} />
        <Route path="/UserList" element={<UserList />} />
 

        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
