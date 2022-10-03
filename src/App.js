// import { useEffect, useState } from "react";
// import { useDispatch,  } from "react-redux";
// import "./App.css";
// import { BACKEND_URL, AuthToken } from "./const";
// import { Project } from "./Project";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { RouterComponent } from "./RoutesComponent";
import { getObjectivs } from "./store/objectivs/action";

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getObjectivs())
  },[])
   
  return (
    <div className="App">
     <BrowserRouter>
          <RouterComponent/>
     </BrowserRouter>
    </div>
  );
}

export default App;
