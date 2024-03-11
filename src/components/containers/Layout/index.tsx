import React from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

const Layout = () => {

    return (
        <>
            <header>
                <Header />
            </header>
            <main style={{ flex: 1 }}>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Layout;