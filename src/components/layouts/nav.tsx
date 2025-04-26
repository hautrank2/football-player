"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  SheetContent,
  SheetTrigger,
  Sheet,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "../ui/sheet";
import { cn } from "~/lib/utils";
import { usePathname } from "next/navigation";

function Nav({}) {
  const pathname = usePathname();
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
    {
      title: "Museum",
      href: "/museum",
    },
  ];

  const classLink =
    "hover:bg-primary hover:text-background active:bg-primary active:text-background";

  return (
    <div className="header-extra">
      <div className="items-center hidden md:flex gap-2">
        {navs.map((nav) => (
          <Link
            key={nav.href}
            href={nav.href}
            className={cn(
              "px-4 py-2",
              classLink,
              pathname === nav.href && "bg-primary text-background"
            )}
          >
            <h4 className="text-2xl">{nav.title}</h4>
          </Link>
        ))}
      </div>

      <Sheet>
        <SheetTrigger className="md:hidden">
          <Menu />
        </SheetTrigger>
        <SheetContent className="w-[400px] sm:w-[540px]">
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <div className="flex flex-col gap-0 py-8">
            {navs.map((nav) => (
              <Link
                key={nav.href}
                href={nav.href}
                className={cn(
                  "px-8 py-2",
                  classLink,
                  pathname === nav.href && "bg-primary text-background"
                )}
              >
                <h4 className="text-2xl">{nav.title}</h4>
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default Nav;
