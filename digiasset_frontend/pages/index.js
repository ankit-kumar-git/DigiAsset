import React from "react";

import Style from "../styles/index.module.css";
import {
  HeroSection,
  Service,
  BigNFTSlider,
  Subscribe,
  Title,
  Category,
  Filter,
  NFTCard,
  Collection,
  AudioLive,
  FollowerTab,
  Slider
} from "../components/componentsindex";
const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Title
        heading="Latest Audio Collections"
        paragraph="Discover the most outstanding NFTs of all topics of life"
      />
      <AudioLive />
      <FollowerTab />
      {/* <Title
        heading="Explore NFTs Video"
        paragraph="Click on the play icon and enjoy the NFT videos"
      /> */}
      <Slider />
      <Collection />
      <Title
        heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs of all topics of life"
      />
      <Filter />
      <NFTCard />
      <Title
        heading="Browse by Category"
        paragraph="Explore the NFTs in the most featured Categories"
      />
      <Category />
      <Subscribe />
    </div>
  );
};

export default Home;
