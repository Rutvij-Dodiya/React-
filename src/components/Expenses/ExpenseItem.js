//components in react are basically functions written in javascript
import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  //useState hook by react: thats (always) how they're defined underneath!
  const [title, setTitle] = useState(props.title);

  function clickHandler() {
    setTitle("Updated");
    console.log(title);
  }

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Click</button>
      </Card>
    </li>
  );
}

//COMMENT FOR LINE 21 @  <ExpenseDate date={props.date}/> : date is from App.js and date in {props.date} is from date used in const month, const day, const year

//exporting it to make it usable outside of the file
export default ExpenseItem;
