import './App.css';
import React, { useState } from 'react';
import ExpInputs from './components/expInputs';
import Expenses from './components/expenses';
import Incomes from './components/incomes';
import IncInputs from './components/incInputs';



function App() {

  const [isIncome, setIsIncome] = useState(false);
  const [expense, setExpense] = useState({});
  const [income, setIncome] = useState({});
  const [expList, setExpList] = useState([]);
  const [incList, setIncList] = useState([]);
  const [expAmountList, setExpAmountList] = useState([]);


  const addIncome = () => {
    setIsIncome(true);
  };

  const closeInc = () => {
    setIsIncome(false);
  }


  const handleChange = (event) => {
    const value = event.target.value;
    setExpense({
      ...expense, 
      [event.target.name]: value
    });
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();  
    setExpList([...expList, expense]); 
    setExpense({
      description: "",
      amount: "",
      category: ""
    }); 
    setExpAmountList([...expAmountList, Number(expense.amount)]);
  };

  const handleIncChange = (event) => {
    const value = event.target.value;
    setIncome({
      ...income, 
      [event.target.name]: value
    });
  };

  const handleIncSubmit = (event) => {
    event.preventDefault();  
    setIncList([...incList, income]); 
    setIncome({
      source: "",
      amount: ""
    }); 
    //setIsIncome(false);
  };


  
  return (
    <div className="App">
      <button onClick={addIncome}>Add Income</button>

      {!isIncome && <ExpInputs
      handleChange={handleChange} 
      handleSubmit={handleSubmit} 
      expense={expense}
      />}

      {isIncome && <IncInputs 
      closeInc={closeInc}     
      handleIncChange={handleIncChange}
      handleIncSubmit={handleIncSubmit}
      income={income}
      />}
      <Expenses content={expList} totalExp={expAmountList}/>
      <Incomes content={incList}/>      
    </div>
  );
}

export default App;
