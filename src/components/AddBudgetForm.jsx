import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { Form } from "react-router-dom";

const AddBudgetForm = () => {
  return (
    <div className="form-wrapper">
      <h3 className="h3">Create Budget</h3>
      <Form method="POST" className="grid-sm">
        <div className="grid-xs">
          <label htmlFor="newBudget"> Budget Name : </label>
          <input
            type="text"
            name="newBudget"
            id="newBudget"
            placeholder="Eg.,  Groceries"
            required
          />
        </div>
        <div className="grid-xs">
          <label htmlFor="newBudgetAmount"> Amount : </label>
          <input
            type="number"
            name="newBudgetAmount"
            id="newBudgetAmount"
            placeholder="Eg., $350"
            step="0.01"
            inputMode="decimal"
            required
          />
        </div>
        <input type="hidden" name="_action" value="createBudget" />
        <button type="submit" className="btn btn--dark">
          <span>Create Budget</span>
          <CurrencyDollarIcon width={20} />
        </button>
      </Form>
    </div>
  );
};

export default AddBudgetForm;
