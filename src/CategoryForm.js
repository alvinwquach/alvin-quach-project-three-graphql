import { useState } from "react";

// create a function that will update state when the user selects a new option
function CategoryForm(props) {
  const [userChoice, setUserChoice] = useState("placeholder");
  const handleUserChoice = (e) => {
    setUserChoice(e.target.value);
  };

  return (
    <div className="categoryForm">
      <h2>Show me my expenses by category:</h2>
      {/*when a user submits the form by clicking on the button and their selected category appears*/}
      <form onSubmit={(e) => props.onCategorySelect(e, userChoice)}>
        <select
          htmlFor="category"
          id="category"
          name="category"
          value={userChoice}
          onChange={handleUserChoice}
        >
          <option value="placeholder" disabled>
            Pick one:
          </option>
          <option value="all">All</option>
          <option value="n/a">N/A</option>
          <option value="coffee">Coffee</option>
          <option value="drinks">Drinks</option>
          <option value="entertainment">Entertainment</option>
          <option value="family">Family</option>
          <option value="gadgets">Gadgets</option>
          <option value="gifts">Gifts</option>
          <option value="groceries">Groceries</option>
          <option value="health">Health</option>
          <option value="house">House</option>
          <option value="insurance">Insurance</option>
          <option value="restaurants">Restaurants</option>
          <option value="security">Security</option>
          <option value="shopping">Shopping</option>
          <option value="utilities">Utilities</option>
        </select>
        <button className="buttonPrimary" type="submit">
          Where did my money go?!💸
        </button>
      </form>
    </div>
  );
}

export default CategoryForm;
