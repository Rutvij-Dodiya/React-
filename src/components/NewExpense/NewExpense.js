import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    //just like we went from child (expenseform.js) to parent (newexpense.js) by creating a function pointer onSaveExpense on parent and calling it in child, we did the same here from child (newexpense.js) to parent(app.js), by creating a function pointer onAddExpense and calling it in newexpense.js (child)
    props.onAddExpense(expenseData);
  };
  //prop work from parent to child and not viceversa, here we are creating a function pointer - onSaveExpenseData from child to parent
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
    </div>
  );
};

export default NewExpense;
