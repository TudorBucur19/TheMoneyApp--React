import './App.css';
import React, { useState, useEffect } from 'react';
import ExpInputs from './components/expInputs';
import Expenses from './components/expensesDisplay/expenses';
import Incomes from './components/incomesDisplay/incomes';
import IncInputs from './components/incInputs';
import Header from './components/header/header';
import firebase from './utils/firebase';
import ExpContextProvider from './contexts/ExpensesContext';
import IncContextProvider from './contexts/IncomesContext';




function App() {

  const [isIncome, setIsIncome] = useState(false);
  //const [expense, setExpense] = useState({});
  const [income, setIncome] = useState({});
  //const [expList, setExpList] = useState([]);
  const [incList, setIncList] = useState([]);
  //const [expAmountList, setExpAmountList] = useState([]);
  const [incAmountList, setIncAmountList] = useState([]);


//   function onSubmit(event)  {
//     event.preventDefault()

//     firebase
//     .firestore()
//     .collection('expenses')
//     .add({
//         expense
//     })
//     .then(() => {
//       setExpense({
//         description: "",
//         amount: "",
//         category: "",
//         date: "",
//       }); 
//     })
// }

  const addIncome = () => {
    setIsIncome(true);
  };

  const closeInc = () => {
    setIsIncome(false);
  }


  // const handleExpChange = (event) => {
  //   const value = event.target.value;
  //   setExpense({
  //     ...expense, 
  //     [event.target.name]: value
  //   });
  // };

//   function useExpenses() {
//     const [expenses, setExpenses] = useState([]);

//     useEffect(() => {
//         const unsubscribe = firebase
//         .firestore()
//         .collection('expenses')
//         .onSnapshot((snapshot) => {
//             const newExp = snapshot.docs.map((doc) => ({
//                 id: doc.id,
//                 ...doc.data()
//             }))
//             setExpenses(newExp);
//         })
//         return () => unsubscribe();
//     }, [])

//     return expenses;
// }

      
  // const handleExpSubmit = (event) => {
  //   event.preventDefault();
  //   setExpList([...expList, expense]);
  //   setExpense({
  //     description: "",
  //     amount: "",
  //     category: "",
  //     date: "",
  //   }); 
  //   setExpAmountList([...expAmountList, Number(expense.amount)]);
  // };

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
      amount: "",
      date: ""
    }); 
    setIncAmountList([...incAmountList, Number(income.amount)]);
  };

  const totalAmounts = (list) => list.reduce((total, el) => total = total + el, 0);
  
  
  return (
    <div className="App">
      <ExpContextProvider>
        <IncContextProvider>
          <Header
          // totalExp={totalAmounts(expAmountList)}
          // totalInc={totalAmounts(incAmountList)}
          />

          <div className="input--fields">
            {!isIncome && <ExpInputs
            //handleExpChange={handleExpChange} 
            //handleExpSubmit={onSubmit} 
            //expense={expense}
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
            //content={useExpenses()} 
            //totalExp={totalAmounts(expAmountList)}
            />
            <Incomes 
            content={incList}
            totalInc={totalAmounts(incAmountList)}
            />
            
          </div>
        </IncContextProvider>
      </ExpContextProvider>    
    </div>
  );
}

export default App;
