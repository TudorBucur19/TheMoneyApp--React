import './App.css';
import React, { useState } from 'react';
import ExpInputs from './components/expInputs';
import Expenses from './components/expensesDisplay/expenses';
import Incomes from './components/incomesDisplay/incomes';
import IncInputs from './components/incInputs';
import Header from './components/header/header';
import ExpContextProvider from './contexts/ExpensesContext';
import IncContextProvider from './contexts/IncomesContext';


function App() {

  const [isIncome, setIsIncome] = useState(false);
  
  const addIncome = () => {
    setIsIncome(true);
  };

  const closeInc = () => {
    setIsIncome(false);
  };
  
  return (
    <div className="App">
      <ExpContextProvider>
        <IncContextProvider>
          <Header/>
          <div className="input--fields">
            {!isIncome && <ExpInputs
            />}

            {isIncome && <IncInputs 
            closeInc={closeInc}            
            />}

            <button className="inc--button" onClick={addIncome}>Add Income</button>
          </div>

          <div className="tables">
            <Expenses/>
            <Incomes/>            
          </div>
        </IncContextProvider>
      </ExpContextProvider>    
    </div>
  );
}

export default App;
