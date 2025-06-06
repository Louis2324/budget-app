import { UserPlusIcon } from "@heroicons/react/16/solid";
import { Form } from "react-router-dom";
import illustration from "../assets/illustration.jpg";

const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>
          Take control of <span className="accent"> Your Money</span>
        </h1>
        <p>
          Personal Budgeting is the secret to financial freedom. Start your
          journey today !!
        </p>
        <Form method="POST">
          <input
            type="text"
            name="userName"
            required
            placeholder="What is your name ?"
            aria-label="Your Name"
            autoComplete="given-name"
          />

          <input type="hidden" name = "_action" value ="newUser" />

          <button type="submit" className="btn btn--dark">
            <span>Create Account</span>
            <UserPlusIcon height={20} />
          </button>
        </Form>
      </div>
      <img src={illustration} alt="person with money" width={600} />
    </div>
  );
};

export default Intro;
