import React, { createContext, useState, useEffect } from 'react';
import firebase from '../utils/firebase';

export const ExpContext = createContext();



const ExpContextProvider = (props) => {
    const [expense, setExpense] = useState({});
    const expenses = useExpenses();
    const amountList = expenses.map(el => Number(el.expense.amount));
    const totalExp = () => amountList.reduce((total, el) => total = total + el, 0);

    let monthNumber = new Date().getMonth();
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let currentMonth = monthNames[monthNumber];

    
    const handleExpChange = (event) => {
        const value = event.target.value;
        setExpense({
          ...expense, 
          [event.target.name]: value
        });
      };


    function onSubmit(event)  {
        event.preventDefault()
    
        firebase
        .firestore()
        .collection(`Exp ${currentMonth}`)
        .add({
            expense
        })
        .then(() => {
          setExpense({
            description: "",
            amount: "",
            category: "",
            date: "",
          }); 
        })
    }

    function useExpenses() {
        const [expenses, setExpenses] = useState([]);
    
        useEffect(() => {
            const unsubscribe = firebase
            .firestore()
            .collection(`Exp ${currentMonth}`)
            .onSnapshot((snapshot) => {
                const newExp = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setExpenses(newExp);
            })
            return () => unsubscribe();
        }, [])
    
        return expenses;
    }
   

        

    return ( 
        <ExpContext.Provider value={{ expense, onSubmit, handleExpChange, totalExp, expenses }}>
            {props.children}
        </ExpContext.Provider>
     );
}
 
export default ExpContextProvider;