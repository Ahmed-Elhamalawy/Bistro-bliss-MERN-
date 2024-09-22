import React from "react";

import ExploreCards from "@/components/ExploreCards";
import UniqueServices from "@/components/UniqueServices";
import BrowesMenu from "@/components/BrowseMenu";
import Hero from "@/components/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <BrowesMenu />
      <ExploreCards />
      <UniqueServices />
    </>
  );
};

export default Home;
