import React from "react";
import { Typography } from "../ui/typography";
import { Avatar, AvatarImage } from "../ui/avatar";
import Link from "next/link";

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
    <header className="flex justify-between items-center w-full fixed top-0 h-16 px-16 border-b z-20 bg-background/90">
      <div className="header-branch flex gap-2">
        <Avatar>
          <AvatarImage src="/img/kdb-avt-anime.png" loading="lazy" />
        </Avatar>
        <Typography variant={"h3"} className="uppercase">
          Kevin De Bruyne
        </Typography>
      </div>
      <div className="header-search px-16"></div>
      <div className="header-extra flex items-center gpa-2">
        {navs.map((nav) => (
          <Link
            key={nav.href}
            href={nav.href}
            className="px-4 py-2 hover:bg-primary hover:text-background"
          >
            <h4 className="text-2xl">{nav.title}</h4>
          </Link>
        ))}
      </div>
    </header>
  );
}

export default Header;
