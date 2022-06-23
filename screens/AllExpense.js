import React from "react";
import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

function AllExpense() {
  return <ExpensesOutput expensesPeriod="Total Expenses" />;
}

export default AllExpense;
