import React, { createContext, useState, useEffect } from 'react';
import firebase from '../utils/firebase';

export const IncContext = createContext();



const IncContextProvider = (props) => {
    const [income, setIncome] = useState({});
    const incomes = useIncomes();
    const amountList = incomes.map(el => Number(el.income.amount));
    const totalInc = () => amountList.reduce((total, el) => total = total + el, 0);

    let monthNumber = new Date().getMonth();
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let currentMonth = monthNames[monthNumber];


    const handleIncChange = (event) => {
        const value = event.target.value;
        setIncome({
          ...income, 
          [event.target.name]: value
        });
      };


      function onSubmit(event)  {
        event.preventDefault()
    
        firebase
        .firestore()
        .collection(`Inc ${currentMonth}`)
        .add({
            income
        })
        .then(() => {
          setIncome({
            source: "",
            amount: "",
            date: ""
          }); 
        })
    };


    function useIncomes() {
        const [incomes, setIncomes] = useState([]);
    
        useEffect(() => {
            const unsubscribe = firebase
            .firestore()
            .collection(`Inc ${currentMonth}`)
            .onSnapshot((snapshot) => {
                const newInc = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setIncomes(newInc);
            })
            return () => unsubscribe();
        }, [])
    
        return incomes;
    };
   

        
    return ( 
        <IncContext.Provider value={{ income, onSubmit, handleIncChange, totalInc, incomes }}>
            {props.children}
        </IncContext.Provider>
     );
}
 
export default IncContextProvider;