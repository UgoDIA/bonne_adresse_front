"use client";
import React from "react";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import { CardContent } from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { AddressStats } from "@/lib/type";

const chartConfigCorrect = {
  correct: {
    label: "correct",
  },
} satisfies ChartConfig;

const chartConfigCorriger = {
  corriger: {
    label: "corriger",
  },
} satisfies ChartConfig;

const chartConfigNoMatch = {
  noMatch: {
    label: "noMatch",
  },
} satisfies ChartConfig;

export function GraphStats({ addressStats }: { addressStats: AddressStats }) {
  const correct_pourcent = parseFloat(addressStats?.correct_pourcent) || 0;
  const corriger_pourcent = parseFloat(addressStats?.corriger_pourcent) || 0;
  const no_match_pourcent = parseFloat(addressStats?.no_match_pourcent) || 0;

  const angleCorrect = Math.round((correct_pourcent / 100) * 360);
  const angleCorriger = Math.round((corriger_pourcent / 100) * 360);
  const angleNoMatch = Math.round((no_match_pourcent / 100) * 360);

  const chartDataCorrect = [{ correct: correct_pourcent, fill: "green" }];
  const chartDataCorriger = [{ corriger: corriger_pourcent, fill: "orange" }];
  const chartDataNoMatch = [{ noMatch: no_match_pourcent, fill: "red" }];

  return (
    <CardContent className="flex flex-col justify-between bg-white rounded-md shadow-md p-6">
      <ChartContainer
        config={chartConfigCorrect}
        className="mx-auto aspect-square max-h-[150px] w-[150px]">
        <RadialBarChart
          data={chartDataCorrect}
          startAngle={180}
          endAngle={180 - angleCorrect}
          innerRadius={65}
          outerRadius={90}>
          <PolarGrid
            gridType="circle"
            radialLines={false}
            stroke="none"
            className="first:fill-muted last:fill-background"
            polarRadius={[69, 59]}
          />
          <RadialBar
            dataKey="correct"
            background
            cornerRadius={10}
          />
          <PolarRadiusAxis
            tick={false}
            tickLine={false}
            axisLine={false}>
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle">
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-4xl font-bold">
                        {correct_pourcent}%
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground text-[14px] font-sans font-bold">
                        Adresse correcte
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </PolarRadiusAxis>
        </RadialBarChart>
      </ChartContainer>
      <ChartContainer
        config={chartConfigCorriger}
        className="mx-auto aspect-square max-h-[150px] w-[150px]">
        <RadialBarChart
          data={chartDataCorriger}
          startAngle={180}
          endAngle={180 + angleCorriger}
          innerRadius={65}
          outerRadius={90}>
          <PolarGrid
            gridType="circle"
            radialLines={false}
            stroke="none"
            className="first:fill-muted last:fill-background"
            polarRadius={[69, 59]}
          />
          <RadialBar
            dataKey="corriger"
            background
            cornerRadius={10}
          />
          <PolarRadiusAxis
            tick={false}
            tickLine={false}
            axisLine={false}>
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle">
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-4xl font-bold">
                        {chartDataCorriger[0].corriger.toLocaleString()}%
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground text-[14px] font-sans font-bold">
                        Adresse corrigée
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </PolarRadiusAxis>
        </RadialBarChart>
      </ChartContainer>
      <ChartContainer
        config={chartConfigNoMatch}
        className="mx-auto aspect-square max-h-[150px] w-[150px]">
        <RadialBarChart
          data={chartDataNoMatch}
          startAngle={180}
          endAngle={180 + angleNoMatch}
          innerRadius={65}
          outerRadius={90}>
          <PolarGrid
            gridType="circle"
            radialLines={false}
            stroke="none"
            className="first:fill-muted last:fill-background"
            polarRadius={[69, 59]}
          />
          <RadialBar
            dataKey="noMatch"
            background
            cornerRadius={10}
          />
          <PolarRadiusAxis
            tick={false}
            tickLine={false}
            axisLine={false}>
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle">
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-4xl font-bold">
                        {chartDataNoMatch[0].noMatch.toLocaleString()}%
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground text-[14px] font-sans font-bold">
                        Adresse érronée
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </PolarRadiusAxis>
        </RadialBarChart>
      </ChartContainer>
    </CardContent>
  );
}
