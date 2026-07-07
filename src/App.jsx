import { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./Components/pages/LandingPage";
import LoginPage from "./Components/pages/LoginPage";
import SignupPage from "./Components/pages/SignupPage";
import AdminDashbord from "./Components/AdminDashbord";
import UserDashbord from "./Components/UserDashbord";
import ViewPage from "./Components/ViewPage";
import AddBook from "./Components/AddBook";
import EditBook from "./Components/EditBook";
import UserPage from "./Components/UserPage";
import OrderPage from "./Components/OrderPage";
import UserAllBooks from "./Components/UserAllBooks";
import UserViewBook from "./Components/UserViewBook";
import UserCart from "./Components/UserCart";
import UserProfile from "./Components/UserProfile";
import AdminProfile from "./Components/AdminProfile";

export const MyContext = createContext();

function App() {
  const [loggedUser, setLoggedUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  return (
    <MyContext.Provider value={{ loggedUser, setLoggedUser }}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route path="/admin" element={<AdminDashbord/>}>
          <Route index element={<ViewPage/>}/>
          <Route path="view-books" element={<ViewPage/>}/>
          <Route path="add-book" element={<AddBook/>}/>
          <Route path="edit/:id" element={<EditBook/>}/>
          <Route path="users" element={<UserPage />} />
          <Route path="orders" element={<OrderPage />} />
          <Route path="profile" element={<AdminProfile />} />
          
        </Route>
        <Route path="/user" element={<UserDashbord/>}>
        <Route index element={<UserAllBooks/>}/>
        <Route path="all-books" element = {<UserAllBooks/>}/>
         <Route path="view/:id" element={<UserViewBook />} />
         <Route path="cart" element={<UserCart />} />
         <Route path="profile" element={<UserProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;