import React, { createContext, useState, useEffect } from 'react';
import firebase from '../utils/firebase';

export const IncContext = createContext();



const IncContextProvider = (props) => {
    const [income, setIncome] = useState({});
    const [incList, setIncList] = useState([]);
    const incomes = useIncomes();
    const amountList = incomes.map(el => Number(el.income.amount));
    const totalAmounts = () => amountList.reduce((total, el) => total = total + el, 0);

    function useIncomes() {
        const [incomes, setIncomes] = useState([]);
    
        useEffect(() => {
            const unsubscribe = firebase
            .firestore()
            .collection('IncomeList')
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
    }
   

    function onSubmit(event)  {
        event.preventDefault()
    
        firebase
        .firestore()
        .collection('IncomeList')
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
    }

    const handleIncChange = (event) => {
        const value = event.target.value;
        setIncome({
          ...income, 
          [event.target.name]: value
        });
      };

      

    return ( 
        <IncContext.Provider value={{ income, incList, onSubmit, handleIncChange, totalAmounts, incomes }}>
            {props.children}
        </IncContext.Provider>
     );
}
 
export default IncContextProvider;