import React, { createContext, useState, useEffect } from 'react';
import firebase from '../utils/firebase';

export const OperationsContext = createContext();



const OperationsContextProvider = (props) => {
    const [operation, setOperation] = useState({});
    const operations = useEntries();
    const expenses = operations.filter(el => el.operation.typeOf === "-");
    const incomes = operations.filter(el => el.operation.typeOf === "+");
    const expAmountList = expenses.map(el => Number(el.operation.amount));
    const incAmountList = incomes.map(el => Number(el.operation.amount));
    
    const totalExp = () => expAmountList.reduce((total, el) => total = total + el, 0);
    const totalInc = () => incAmountList.reduce((total, el) => total = total + el, 0);
    

    let monthNumber = new Date().getMonth();
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let currentMonth = monthNames[monthNumber];

    
    const handleExpChange = (event) => {
        const value = event.target.value;
        setOperation({
          ...operation, 
          [event.target.name]: value
        });
      };


    function onSubmit(event)  {
        event.preventDefault()
    
        firebase
        .firestore()
        .collection(`${currentMonth}`)
        .add({
            operation
        })
        .then(() => {
          setOperation({
            description: "",
            amount: "",
            category: "",
            date: "",
            typeOf: "-"
          }); 
        })
    }

    function useEntries() {
        const [entries, setEntries] = useState([]);
    
        useEffect(() => {
            const unsubscribe = firebase
            .firestore()
            .collection(`${currentMonth}`)
            .onSnapshot((snapshot) => {
                const newEntry = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setEntries(newEntry);
            })
            return () => unsubscribe();
        }, [])
    
        return entries;
    }
   

        

    return ( 
        <OperationsContext.Provider value={{ operation, onSubmit, handleExpChange, totalExp, totalInc, expenses, incomes }}>
            {props.children}
        </OperationsContext.Provider>
     );
}
 
export default OperationsContextProvider;