import React,{useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import Card from './components/UI/Card';


const DUMMY_EXPENSE = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2021, 8, 5),
  },
  {
    id: 'e2',
    title: 'Car',
    amount: 12000.60,
    date: new Date(2021, 11, 9),
  },
  {
    id: 'e3',
    title: 'Insurance',
    amount: 600.25,
    date: new Date(2020, 7, 13),
  },
  {
    id: 'e4',
    title: 'Home loan',
    amount: 10000,
    date: new Date(2019, 2, 27),
  },
];


  

const App = () => {
  const [expenses, setNewExpenses] = useState(DUMMY_EXPENSE);

  const addExpenseHandler = expense => {
    setNewExpenses((prevExpense) => {
      return [...prevExpense, expense ];
    });
  }
                   

  //another way of coding it in react :
 /* return React.createElement(
    'Card',
    {},
      React.createElement('h2',{},'Let's get started!'),
      React.createElement(Expenses, {item:expenses})
    )
  */

    //please check newexpense.js to understand how components are passed from child(newexpense.js) to parent file(app.js) onAddExpense = {addExpenseHandler}

  //JSX form:
   return (
    <Card>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses item={expenses}/>
    </Card>
  );
}

export default App;
