import React from "react";
import { Typography } from "../ui/typography";
import { Avatar, AvatarImage } from "../ui/avatar";
import Nav from "./nav";

async function Header() {
  return (
    <header className="flex px-4 lg:px-16 justify-between items-center w-full fixed top-0 h-16 border-b z-20 bg-background/90">
      <div className="header-branch flex gap-2">
        <Avatar>
          <AvatarImage src="/img/kdb-avt-anime.png" />
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
