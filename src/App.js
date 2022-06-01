import "./assets/styles/App.scss";
import { Articles } from "./components/Articles/Articles";
import { Profile } from "./components/Profile/Profile";
import React, { useEffect, useState } from "react";

function App() {
  
  return (
    <>
      <Profile />
      <Articles />
    </>
  );
}

export default App;
