import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { PlayerSeasonStats } from "~/data/season";
import { cn } from "~/lib/utils";

function DTable({ data }: { data: PlayerSeasonStats[] }) {
  const totals = data.reduce(
    (acc, curr) => {
      acc.matches += curr.matches;
      acc.goals += curr.goals;
      acc.assists += curr.assists;
      acc.yellow_cards += curr.yellow_cards;
      acc.red_cards += curr.red_cards;
      return acc;
    },
    {
      matches: 0,
      goals: 0,
      assists: 0,
      yellow_cards: 0,
      red_cards: 0,
    }
  );
  const cellClass = "text-xl font-normal";
  const headCellClass = "text-2xl font-normal py-2 text-foreground/80 bg-primary/20";
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className={cn(headCellClass)}>Season</TableHead>
          <TableHead className={cn(headCellClass)}>Matches</TableHead>
          <TableHead className={cn(headCellClass)}>Goals</TableHead>
          <TableHead className={cn(headCellClass)}>Assists</TableHead>
          <TableHead className={cn(headCellClass)}>
            <div className="flex gap-2 items-center">
              <div className="w-2 h-4 bg-[yellow] border rounded-sm"></div>Card
            </div>
          </TableHead>
          <TableHead className={cn(headCellClass)}>
            <div className="flex gap-2 items-center">
              <div className="w-2 h-4 bg-[red] border rounded-sm"></div>Card
            </div>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.season}>
            <TableCell className={cn(cellClass)}>{item.season}</TableCell>
            <TableCell className={cn(cellClass)}>{item.matches}</TableCell>
            <TableCell className={cn(cellClass)}>{item.goals}</TableCell>
            <TableCell className={cn(cellClass)}>{item.assists}</TableCell>
            <TableCell className={cn(cellClass)}>{item.yellow_cards}</TableCell>
            <TableCell className={cn(cellClass)}>{item.red_cards}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell className={cn(cellClass)}>Total</TableCell>
          <TableCell className={cn(cellClass)}>{totals.matches}</TableCell>
          <TableCell className={cn(cellClass)}>{totals.goals}</TableCell>
          <TableCell className={cn(cellClass)}>{totals.assists}</TableCell>
          <TableCell className={cn(cellClass)}>{totals.yellow_cards}</TableCell>
          <TableCell className={cn(cellClass)}>{totals.red_cards}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

export default DTable;
