//helper function
import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers";
import Intro from "../components/Intro";
import { toast } from "react-toastify";

// loader function
export function DashboardLoader() {
  const userName = fetchData("userName");
  return { userName };
}

//form action function
export async function dashboardAction({ request }) {
  const data = await request.formData();
  try {
    throw new Error("There was a problem creating your account");
    const formData = Object.fromEntries(data);
    localStorage.setItem("userName", JSON.stringify(formData.userName));
    toast.success(`Welcome ${formData.userName}`);
  } catch (err) {
    throw new Error("There was a problem creating your account");
  }
}

const Dashboard = () => {
  const { userName } = useLoaderData();
  return <div>{userName ? <p>{userName}</p> : <Intro />}</div>;
};

export default Dashboard;
