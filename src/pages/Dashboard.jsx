//helper function
import { useLoaderData } from "react-router-dom";
import { createBudget, fetchData } from "../helpers";
import Intro from "../components/Intro";
import { toast } from "react-toastify";
import AddBudgetForm from "../components/AddBudgetForm";

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
      return toast.success("budget created");
    } catch (error) {
      throw new Error("There was a problem creating your budget");
    }
  }
}

const Dashboard = () => {
  const { userName, budgets } = useLoaderData();
  return (
    <div>
      {userName ? (
        <div className="dashboard">
          <h2>
            Welcome back, <span className="accent">{userName}</span>
          </h2>
          <div className="grid-sm">
            {/* {{budgets ? () : ()}} */}
            <div className="grid-lg">
              <div className="flex-lg">
                <AddBudgetForm />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </div>
  );
};

export default Dashboard;
