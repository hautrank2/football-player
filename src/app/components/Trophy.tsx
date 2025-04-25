import Image from "next/image";
import React from "react";
import { ACHIEVEMENT_DATA } from "~/data/achievement";

function Trophy({}) {
  const data = ACHIEVEMENT_DATA;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div className="col-span-1 flex items-start flex-col gap-4">
        <h3 className="text-3xl mb-2">Tập thể</h3>
        <ul>
          {data.clubAchievements.map((ach) => {
            return (
              <li className="flex gap-2 w-full py-2" key={ach.id}>
                <div className="p-px w-8 h-8 bg-foreground rounded">
                  <div className="img w-full h-full relative">
                    <Image
                      src={ach.icon}
                      fill
                      alt="icon"
                      className="object-contain"
                      priority={false}
                      loading="lazy"
                    />
                  </div>
                </div>
                <p className="text-xl">
                  <span className="">{ach.title}:</span>{" "}
                  <span className="text-primary">{ach.years.join(", ")}</span>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="col-span-1">
        <h3 className="text-3xl mb-2">Cá nhân</h3>
        <ul className="list-disc">
          {data.individualAwards.map((ach) => {
            return (
              <li key={ach.id} className="py-2">
                <p className="text-xl leading-7">
                  <span>{ach.title}:</span> {"  "}
                  <span className="text-primary">{ach.years.join(", ")}</span>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Trophy;
