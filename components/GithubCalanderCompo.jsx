"use client";
import { useState } from "react";
import GitHubCalendar from "react-github-calendar";

const GithubCalanderCompo = () => {
  const years = [2020, 2021, 2022, 2023, 2024, 2025];
  const allYears = years.reverse();
  const [selectedYear, setSelectedYear] = useState(2024);

  const yearSelect = (year) => {
    setSelectedYear(year);
  };
  return (
    <div className="flex ">
      <div className=" w-full rounded-xl border-[1px] p-2 ">
        <GitHubCalendar
          username="ItsMdYousuf"
          year={selectedYear}
          blockSize={10}
          blockRadius={2.5}
          fontSize={12}
        />
      </div>
      <div className="pl-2">
        <ul className="flex flex-col flex-wrap gap-2">
          {allYears.map((year) => (
            <li
              onClick={() => yearSelect(year)}
              key={year}
              className={`cursor-pointer select-none rounded-lg border px-4 py-2 text-xs font-semibold   ease-in-out
                ${selectedYear === year ? "bg-blue-500 text-white" : "hover:bg-gray-100"}`}
            >
              {year}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GithubCalanderCompo;
