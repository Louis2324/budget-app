import { redirect } from "react-router-dom";
import { deleteItem, getAllMatchingItems } from "../helpers";
import { toast } from "react-toastify";

export async function deleteBudgetAction({ params }) {
  try {
    deleteItem({
      key: "budgets",
      id: params.id,
    });
    const associatedExpenses = getAllMatchingItems({
      category: "expenses",
      key: "budgetId",
      values: params.id,
    });

    associatedExpenses.forEach((expense) => {
      deleteItem({
        key: "expenses",
        id: expense.id,
      });
    });
    toast.success("Budget deleted");
  } catch (error) {
    throw new Error("There was a problem deleting your budget");
  }

  return redirect("/");
}
