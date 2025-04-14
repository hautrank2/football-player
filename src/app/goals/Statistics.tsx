"use client";

import React from "react";
import { PlayerSeasonStats } from "~/data/season";
import {
  CartesianGrid,
  LabelList,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/chart";

const chartConfig = {
  desktop: {
    label: "goals",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "assists",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

function Statistics({ data }: { data: PlayerSeasonStats[] }) {
  return (
    <div>
      <ChartContainer config={chartConfig}>
        <LineChart
          accessibilityLayer
          data={data}
          margin={{
            top: 32,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="season"
            tickLine={false}
            axisLine={false}
            padding={{ left: 16, right: 16 }}
          />
          <YAxis />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" />}
          />
          <Line
            dataKey="goals"
            type="natural"
            stroke="var(--chart-1)"
            strokeWidth={2}
            dot={{
              fill: "var(--chart-1)",
            }}
            activeDot={{
              r: 6,
            }}
          >
            <LabelList
              position="top"
              offset={12}
              className="fill-foreground"
              fontSize={12}
            />
          </Line>
          <Line
            dataKey="assists"
            type="natural"
            stroke="var(--chart-2)"
            strokeWidth={2}
            dot={{
              fill: "var(--chart-2)",
            }}
            activeDot={{
              r: 6,
            }}
          >
            <LabelList
              position="top"
              offset={12}
              className="fill-foreground"
              fontSize={12}
            />
          </Line>
        </LineChart>
      </ChartContainer>
    </div>
  );
}

export default Statistics;
