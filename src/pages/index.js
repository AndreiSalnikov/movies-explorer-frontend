import React from 'react';
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Main from "..//pages/Main/Main";
import Login from "./Login/Login";
import Registration from "../pages/Registration/Registration";
import NotFound from "./NotFound/NotFound";
import Movies from "./Movies/Movies";
import SavedMovies from "./SavedMovies/SavedMovies";
import Profile from "./Profile/Profile";

const Routing = () => {
  return (
    <Routes>
      <Route element={<Header/>}>
        <Route path="/profile" element={<Profile/>}/>
        <Route element={<Footer/>}>
          <Route path="/" element={<Main/>}/>
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/saved-movies" element={<SavedMovies/>}/>
        </Route>
      </Route>
      <Route path="*" element={<NotFound/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/registration" element={<Registration/>}/>
    </Routes>
  );
};

export default Routing;
