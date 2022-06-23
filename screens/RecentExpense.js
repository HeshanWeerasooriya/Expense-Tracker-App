import React from "react";
import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

function RecentExpense() {
  return <ExpensesOutput expensesPeriod="LAst 7 DAys!" />;
}

export default RecentExpense;
