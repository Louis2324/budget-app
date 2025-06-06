import { Link, useNavigate, useRouteError } from "react-router-dom";
import { HomeIcon, ArrowUturnLeftIcon } from "@heroicons/react/16/solid";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="error">
      <h1>Uh oh ! We've got a problem</h1>
      <p>{error.message || error.statusText} </p>
      <div className="flex-md">
        <button className="btn btn--dark" onClick={()=>{navigate(-1)}}>
          <ArrowUturnLeftIcon width={20} />
          <span>Go back</span>
        </button>
        <Link to="/" className="btn btn--dark">
          <HomeIcon width={30} />
          Go home
        </Link>
      </div>
    </div>
  );
};

export default Error;
