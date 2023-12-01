import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from 'history'

import Login from "./pages/Login";
import Home from "./pages/Home";

export default function App() {

  return (
    <BrowserRouter history={createBrowserHistory()}>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path = "/home" element = { <Home/> } />
      </Routes>
    </BrowserRouter>
  )
}