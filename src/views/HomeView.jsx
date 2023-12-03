import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Site from "../components/Site";
import Design from "../components/Design";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Skip from "../components/Skip";
import Main from "../components/Main";

const HomeView = () => {
    return (
    <>
        <Skip />
        <Header />
        <Main>
            <Intro />
            <Site />
            <Design />
            <Contact />
        </Main>
        <Footer />
    </>
    );
};

export default HomeView;