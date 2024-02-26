import React from "react";
import Link from "next/link";
import Style from "./HelpCenter.module.css";

const HelpCenter = () => {
  const helpCenter = [
    {
      name: "About Us",
      link: "aboutus",
    },
    {
      name: "Contact Us",
      link: "contactus",
    },
    {
      name: "Sign Up",
      link: "sign-up",
    },
    {
      name: "Sign In",
      link: "sign-in",
    },
    {
      name: "Subscription",
      link: "subscription",
    },
  ];
  return (
    <div className={Style.box}>
      {helpCenter.map((ele, i) => (
        <div className={Style.helpCenter}>
          <Link href={{ pathname: `${ele.link}` }}>{ele.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default HelpCenter;
