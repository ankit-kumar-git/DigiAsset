import React from "react";
import Image from "next/image";
import Style from "../styles/aboutus.module.css";
import { Brand } from "../components/componentsindex";
import images from "../img";

const aboutus = () => {
  const founderArray = [
    {
      name: "Ankit Kumar",
      position: "Co-founder and Chief Executive",
      images: images.founder1,
    },
    {
      name: "Hritik Kumar",
      position: "Co-founder and Chief Executive",
      images: images.user1,
    },
    {
      name: "Guruprasad",
      position: "Co-founder, Chairman",
      images: images.user1,
    },
    {
      name: "Ankur Hirwani",
      position: "Co-Founder, Chief Strategy Officer",
      images: images.user1,
    },
  ];

  const factsArray = [
    {
      title: "1million",
      info: "Articles have been public around the world (as of Jan. 30, 2024)",
    },
    {
      title: "100,000",
      info: "Registered users account (as of Jan. 30, 2024)",
    },
    {
      title: "220+",
      info: "Countries and regions have our presence (as of Jan. 30, 2024",
    },
  ];
  return (
    <div className={Style.aboutus}>
      <div className={Style.aboutus_box}>
        <div className={Style.aboutus_box_hero}>
          <div className={Style.aboutus_box_hero_left}>
            <h1>👋 About Us.</h1>
            <p>
            Welcome to DigiAsset, We are pioneers in the dynamic world of Non-Fungible Tokens (NFTs), providing a cutting-edge marketplace that empowers creators, collectors, and enthusiasts. Our platform is more than just a marketplace; it's a vibrant ecosystem designed to redefine the way digital assets are discovered, owned, and traded.
            </p>
          </div>
          <div className={Style.aboutus_box_hero_right}>
            <Image src={images.hero2} />
          </div>
        </div>

        <div className={Style.aboutus_box_title}>
          <h2>⛱ Founder</h2>
          <p>
            We’re impartial and independent, and We believe in the transformative power of digital creativity. 
          </p>
        </div>

        <div className={Style.aboutus_box_founder}>
          <div className={Style.aboutus_box_founder_box}>
            {founderArray.map((el, i) => (
              <div className={Style.aboutus_box_founder_box_img}>
                <Image
                  src={el.images}
                  alt={el.name}
                  width={200}
                  height={200}
                  className={Style.aboutus_box_founder_box_img_img}
                />
                <h3>{el.name}</h3>
                <p>{el.position}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={Style.aboutus_box_title}>
          <h2>🚀 Fast Facts</h2>
          <p>
          We’re impartial and independent, and We believe in the transformative power of digital creativity.
          </p>
        </div>

        <div className={Style.aboutus_box_facts}>
          <div className={Style.aboutus_box_facts_box}>
            {factsArray.map((el, i) => (
              <div className={Style.aboutus_box_facts_box_info}>
                <h3>{el.title}</h3>
                <p>{el.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Brand />
    </div>
  );
};

export default aboutus;