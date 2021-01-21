import React, { createContext, useState, useEffect } from 'react';
import firebase from '../utils/firebase';

export const OperationsContext = createContext();



const OperationsContextProvider = (props) => {
    
    const [operation, setOperation] = useState({});
    const operations = useEntries();

    const expenses = operations.filter(el => el.operation.typeOf === "expense");
    const incomes = operations.filter(el => el.operation.typeOf === "income");
    const expAmountList = expenses.map(el => Number(el.operation.amount));
    const incAmountList = incomes.map(el => Number(el.operation.amount));    
    
    
    const totalExp = () => expAmountList.reduce((total, el) => total = total + el, 0);
    const totalInc = () => incAmountList.reduce((total, el) => total = total + el, 0);
    
    

    let monthNumber = new Date().getMonth();
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let currentMonth = monthNames[monthNumber];
    
    
    const handleChange = (event) => {
        const value = event.target.value;
        setOperation({
          ...operation, 
          [event.target.name]: value
        });
      };

      
    const db = firebase.firestore();

    function onSubmit(event)  {
        event.preventDefault()
    
        db.collection(`${currentMonth}`)
        .add({
            operation
        })
        .then(() => {
          setOperation({
            description: "",
            amount: "",
            category: "",
            date: "",
            typeOf: ""
          }); 
        })
    }

    function useEntries() {
        const [entries, setEntries] = useState([]);
        
        useEffect(() => {
            const unsubscribe = db
            .collection(`${currentMonth}`)
            .onSnapshot((snapshot) => {
                const newEntry = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setEntries(newEntry);
                console.log(newEntry);
            })
            return () => unsubscribe();
        }, [])
    
        return entries;
    };

    const removeItem = (id) => {
        firebase
        .firestore()
        .collection(`${currentMonth}`)
        .doc(id)
        .delete()
        .then(() => console.log("Document deleted"))
        .catch((error) => console.error("Error deleting document", error));   
    };

    const values = { operation, onSubmit, handleChange, expenses, totalExp, incomes, totalInc, 
         currentMonth, removeItem }
    
    return ( 
        <OperationsContext.Provider value={ values }>
            {props.children}
        </OperationsContext.Provider>
     );
}
 
export default OperationsContextProvider;