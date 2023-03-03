import React, { FC, ReactNode } from "react";
import { Footer, Header } from "../components";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="layout">
      <header className="layout__container ">
        <Header />
      </header>
      <main className="layout__container layout__main">{children}</main>
      <footer className="layout__container">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
