import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Site from "../components/Site";
import Site from "../components/Design";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Main from "../components/Main";

const HomeView = () => {
    return (
    <>
        <Skip />
        <Header />
        <Main>
            <Intro />
            <Skill />
            <Site />
            <Design />
            <Contact />
        </Main>
        <Footer />
    </>
    );
};

export default HomeView;