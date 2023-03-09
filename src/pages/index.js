import React from 'react';
import {Navigate, Outlet, Route, Routes} from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Main from "../pages/Main/Main";
import Login from "./Login/Login";
import Registration from "../pages/Registration/Registration";
import NotFound from "./NotFound/NotFound";
import Movies from "./Movies/Movies";
import SavedMovies from "./SavedMovies/SavedMovies";
import Profile from "./Profile/Profile";
import ProtectedRoute from "../hoc/ProtectedRoute";

const Routing = () => {

  return (
      <Routes>
        <Route element={<Header/>}>
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile/>
            </ProtectedRoute>
          }/>
          <Route element={<Footer/>}>
            <Route path="/" element={<Main/>}/>
            <Route path="/movies" element={
              <ProtectedRoute>
                <Movies/>
              </ProtectedRoute>
            }/>
            <Route path="/saved-movies" element={
              <ProtectedRoute>
                <SavedMovies/>
              </ProtectedRoute>
            }/>
          </Route>
        </Route>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/signin" element={<Login/>}/>
        <Route path="/signup" element={<Registration/>}/>
      </Routes>
  );
};

export default Routing;
