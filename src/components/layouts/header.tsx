import React from "react";
import { Typography } from "../ui/typography";
import { Avatar, AvatarImage } from "../ui/avatar";

async function Header() {
  return (
    <header className="flex justify-between items-center w-full fixed top-0 h-16 px-16 border-b z-20 bg-background/90">
      <div className="header-branch flex gap-2">
        <Avatar>
          <AvatarImage src="/img/kdb-avt-anime.png" />
        </Avatar>
        <Typography variant={"h3"} className="uppercase">Kevin De Bruyne</Typography>
      </div>
      <div className="header-search px-16"></div>
      <div className="header-extra flex items-center gap-4"></div>
    </header>
  );
}

export default Header;
