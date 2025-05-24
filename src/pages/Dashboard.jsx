//helper function
import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers";

// loader function
export function DashboardLoader() {
  const userName = fetchData("userName");
  return {userName};
}

const Dashboard = () => {
  const { userName } = useLoaderData();
  return (
    <div>
      <h1>{userName}</h1>
      <p>Welcome to your Dashboard</p>
    </div>
  );
};

export default Dashboard;
