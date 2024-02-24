import React from 'react'

import Style from '../styles/index.module.css';
import { HeroSection,Service,BigNFTSlider,Subscribe,Title, Category, Filter, NFTCard } from '../components/componentsindex';
const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Title heading="Featured NFTs" paragraph="Discover the most outstanding NFTs of all topics of life"/>
      <Filter />
      <NFTCard />
      <Title heading="Browse by Category" paragraph="Explore the NFTs in the most featured Categories"/>
      <Category />
      <Subscribe />
    </div>
  )
}

export default Home;