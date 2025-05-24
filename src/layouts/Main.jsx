//rrd imports
import { Outlet, useLoaderData } from "react-router-dom";

//helpers
import { fetchData } from "../helpers";

// loader function
export function mainLoader() {
  const userName = fetchData("userName");
  return { userName };
}

//assets
import wave from "../assets/wave.svg";
import Nav from "../components/Nav";

const Main = () => {
  const { userName } = useLoaderData();
  return (
    <div className="layout">
      <Nav userName={ userName } />
      <main>
        <Outlet />
      </main>
      <img src={wave} alt="" />
    </div>
  );
};

export default Main;
