import React from "react";
import { Typography } from "../ui/typography";
import { Avatar, AvatarImage } from "../ui/avatar";
import Nav from "./nav";

function Header() {
  const navs = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Goals & Assists",
      href: "/goals",
    },
    {
      title: "Highlights",
      href: "/highlights",
    },
  ];
  return (
    <header className="flex px-4 lg:px-16 justify-between items-center w-full fixed top-0 h-16 border-b z-20 bg-background/90">
      <div className="header-branch flex gap-2">
        <Avatar>
          <AvatarImage src="/img/kdb-avt-anime.png" loading="lazy" />
        </Avatar>
        <Typography variant={"h3"} className="uppercase">
          Kevin De Bruyne
        </Typography>
      </div>
      <Nav />
    </header>
  );
}

export default Header;
