import React from "react";
import Featured from "../../components/Fetured/Featured";
import Hero from "../../components/Hero/Hero";
import JoinSection from "../../components/JoinSection/JoinSection";
import LinkCopy from "../../components/LinkCopy/LinkCopy";
import Navbar from "../../components/Navbar/Navbar";
import ShortLinkCard from "../../components/ShortLinkCard/ShortLinkCard";
import Footer from "../../components/Footer/Footer";

import style from "./Home.module.css";
import Accodian from "../../components/Accodian/Accodian";
import LastJoin from "../../components/LastJoin/LastJoin";

const Home = (theme1) => {
  return (
    <>
      <Navbar theme={theme1} />
      <Hero theme={theme1} />
      <ShortLinkCard theme={theme1} />
      <div className={style.container}>
        <LinkCopy theme={theme1} />
        <LinkCopy theme={theme1} />

        <LinkCopy theme={theme1} />

        <JoinSection theme={theme1} />
      </div>

      <Featured theme={theme1} />
      <Accodian theme={theme1} />
      <LastJoin theme={theme1} />
      <Footer theme={theme1} />
    </>
  );
};

export default Home;
