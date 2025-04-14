import React from "react";
import DTable from "./DTable";
import { SEASONS } from "~/data/season";
import Statistics from "./Statistics";

function GoalsPage({}) {
  const data = SEASONS;
  return (
    <div className="max-w-4xl mx-auto px-8 lg:px-0">
      <h1 className="text-3xl bg-primary px-4 py-2 text-background w-fit mb-4 ">
        Thống kê qua các mùa
      </h1>
      <DTable data={data} />

      <div className="py-4">
        <Statistics data={data} />
      </div>
    </div>
  );
}

export default GoalsPage;
