//helper function
import { useLoaderData } from "react-router-dom";
import { createBudget, createExpense, fetchData } from "../helpers";
import Intro from "../components/Intro";
import { toast } from "react-toastify";
import AddBudgetForm from "../components/AddBudgetForm";
import AddExpenseForm from "../components/AddExpenseForm";

// loader function
export function DashboardLoader() {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  return { userName, budgets };
}

//form action function
export async function dashboardAction({ request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  if (_action === "newUser") {
    try {
      localStorage.setItem("userName", JSON.stringify(values.userName));
      toast.success(`Welcome ${values.userName}`);
    } catch (err) {
      throw new Error("There was a problem creating your account");
    }
  }

  if (_action === "createBudget") {
    try {
      createBudget({
        name: values.newBudget,
        amount: values.newBudgetAmount,
      });
      return toast.success("Budget Created");
    } catch (error) {
      throw new Error("There was a problem creating your budget");
    }
  }

  if (_action === "createExpense") {
    console.log(values);
    try {
      createExpense({
        name: values.newExpense,
        amount: values.newExpenseAmount,
        budgetId: values.newExpenseBudget,
      });
      return toast.success(`Expense ${values.newExpense} added`);
    } catch (error) {
      throw new Error("There was a problem creating your expense");
    }
  }
}

const Dashboard = () => {
  const { userName, budgets } = useLoaderData();

  return (
    <>
      {userName ? (
        <div className="dashboard">
          <h1>
            Welcome back, <span className="accent">{userName}</span>
          </h1>
          <div className="grid-sm">
            {budgets && budgets.length > 0 ? (
              <div className="grid-sm">
                <h3>
                  Personal budgeting is the{" "}
                  <span className="accent">secret </span>
                  to financial freedom.
                </h3>
                <AddBudgetForm />
                <AddExpenseForm budgets={budgets} />
              </div>
            ) : (
              <div className="grid-lg">
                <div className="flex-sm">
                  <h3>
                    Personal budgeting is the{" "}
                    <span className="accent">secret </span>
                    to financial freedom.
                  </h3>
                  <p>Create a budget and get started!</p>
                  <AddBudgetForm />
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
};
export default Dashboard;
