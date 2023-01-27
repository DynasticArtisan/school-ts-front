import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="layout">
      <header className="layout__container layout__header">
        <Header />
      </header>
      <main className="layout__container layout__main">
        <Outlet />
      </main>
      <footer className="layout__container layout__footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
