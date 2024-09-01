import { Fragment, useContext, useState } from "react";
import Products from "./pages/Products";
import Header from "./components/Header";
import SignIn from "./pages/SignIn";
import { LoginContext } from "./store/LoginProvider";
import { Outlet } from "react-router-dom";

function App() {
 
  return (
    <Fragment>
      <header>
        <Header />
      </header>
      <main
        className="flex flex-wrap gap-5 py-24 px-5 justify-center min-h-screen"
        style={{ backgroundColor: "#c2c2c2" }}
      >
       <Outlet/>
      </main>
    </Fragment>
  );
}

export default App;
