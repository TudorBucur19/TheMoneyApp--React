import './App.css';
import React, { useState } from 'react';
import ExpInputs from './components/expInputs';
import Expenses from './components/expensesDisplay/expenses';
import Incomes from './components/incomesDisplay/incomes';
import IncInputs from './components/incInputs';
import Header from './components/header/header';



function App() {

  const [isIncome, setIsIncome] = useState(false);
  const [expense, setExpense] = useState({});
  const [income, setIncome] = useState({});
  const [expList, setExpList] = useState([]);
  const [incList, setIncList] = useState([]);
  const [expAmountList, setExpAmountList] = useState([]);
  const [incAmountList, setIncAmountList] = useState([]);


  const addIncome = () => {
    setIsIncome(true);
  };

  const closeInc = () => {
    setIsIncome(false);
  }


  const handleExpChange = (event) => {
    const value = event.target.value;
    setExpense({
      ...expense, 
      [event.target.name]: value
    });
  };

  
  const handleExpSubmit = (event) => {
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
    setIncAmountList([...incAmountList, Number(income.amount)]);
  };

  let currentTotalExp = expAmountList.reduce((total, el) => total = total + el, 0);
  let currentTotalInc = incAmountList.reduce((total, el) => total = total + el, 0);

  
  return (
    <div className="App">
      <Header
      totalExp={currentTotalExp}
      totalInc={currentTotalInc}
      />

      <div className="input--fields">
        {!isIncome && <ExpInputs
        handleExpChange={handleExpChange} 
        handleExpSubmit={handleExpSubmit} 
        expense={expense}
        />}

        {isIncome && <IncInputs 
        closeInc={closeInc}     
        handleIncChange={handleIncChange}
        handleIncSubmit={handleIncSubmit}
        income={income}
        />}

        <button className="inc--button" onClick={addIncome}>Add Income</button>
      </div>

      <div className="tables">
        <Expenses 
        content={expList} 
        totalExp={currentTotalExp}
        />
        <Incomes 
        content={incList}
        totalInc={currentTotalInc}
        />
      </div>      
    </div>
  );
}

export default App;
