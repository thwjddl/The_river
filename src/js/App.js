import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import App_2 from "./App_2";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<MainPage />} />
          <Route path="/list01" element={<App_2/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
