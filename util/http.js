import axios from "axios";

export function storeExpense(expenseData) {
  axios.post(
    "https://react-native-course-3d741-default-rtdb.firebaseio.com/expenses.json",
    expenseData
  );
}
