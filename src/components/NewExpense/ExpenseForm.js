import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //three state approach
  const [enteredTitle, setEnteredTitle] = useState();
  const [enteredAmount, setEnteredAmount] = useState();
  const [enteredDate, setEnteredDate] = useState();

  //one state approach (underneath) includes object so you don't have to create a separate function to hold the data. Since we're using one state approach, we have create a function/ const expenseData under SubmitHandler function to hold our data

  // const [userInput, setUserInput] = useState({
  //   enteredDate:'',
  //   enteredAmount:'',
  //   enteredTitle:''
  // })

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    //one state:
    // setUserInput({
    //   ...userInput,
    //   enteredAmount:event.target.value
    // })
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    //one state:
    // setUserInput({
    //   ...userInput,
    //   enteredAmount:event.target.value
    // })
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    //one state:
    // setUserInput({
    //   ...userInput,
    //   enteredDate:event.target.value
    // })
  };

  const submitHandler = (event) => {
    //.preventDefault() is not a react but a javascript method means it won't let u do it's basic function. for eg it won't let you put a check mark in a check box.
    //we're using preventDefault() because we don't want our page to refresh when we submit the request, therefore we're trying to cancel the default behavior
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate + "T00:00:00"), // 'T00:00:00' to fix the date as the date by default gives a day prior to what we select. For example: June 19th shows up when we pick June 20th
    };

    //argument expenseData will match the parameter const saveExpenseDataHandler = (enteredExpenseData) => {.....} (LINE 6 in NewExpense.js)
    props.onSaveExpenseData(expenseData);

    //to clear the form after every submission

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    //we're passing 2 things on a single line of code, entereing value and clearing value. value={enteredTitle} (or date or amount) is used to clear the form after every submission; it's called 2 way binding
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button onClick={props.onCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
