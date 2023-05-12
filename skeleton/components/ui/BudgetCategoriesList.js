import React from "react";
import { useState } from "react";

import BarChart from "./BudgetProgressBar";

export default function BudgetCategoriesList(props) {
  const progressCharts = props.budgetAmounts.map((element, i) => {
    return (
      <BarChart
        key={i}
        width={(Math.round(element.budgetPercentage * 100) / 100).toFixed(1)}
        name={element.name}
        currentAmount={(Math.round(element.currentAmount * 100) / 100).toFixed(
          2
        )}
        totalBudget={(Math.round(element.totalBudget * 100) / 100).toFixed(2)}
      ></BarChart>
    );
  });

  return (
    <div className="text-center text-3xl font-bold">
      {" "}
      Budgets
      <div className="font-bold text-xl flex justify-end mr-5">
        Current / Total
      </div>
      {progressCharts}
    </div>
  );
}
