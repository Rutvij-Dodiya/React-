import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if(props.items.length === 0){
   return <h2 className="expenses-list__fallback">Found no expenses</h2>
  }

  return (
    <ul className="expenses-list">
      {props.items.map((param) => (
        <ExpenseItem
          //Key prop is used in react because it allows react to identify data.
          key={param.id}
          title={param.title}
          amount={param.amount}
          date={param.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;


