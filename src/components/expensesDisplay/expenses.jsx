import React, { useContext, useEffect, useState } from 'react';
import './expenses.styles.css';
import firebase from '../../utils/firebase';
import { ExpContext } from '../../contexts/ExpensesContext';

// function useExpenses() {
//     const [expenses, setExpenses] = useState([]);

//     useEffect(() => {
//         const unsubscribe = firebase
//         .firestore()
//         .collection('ExpenseList')
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

const Expenses = ({content, totalExp}) => {
    //const expenses = useExpenses();
    const { totalAmounts, expenses } = useContext(ExpContext);
    // const amountList = expenses.map(el => Number(el.expense.amount));
    // const totalAmounts = () => amountList.reduce((total, el) => total = total + el, 0);
        
    let today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    
    
    return(
        <div>
            <table className="expenses--display">
                <thead>
                <tr className="exp--header">
                    <th>Crt.</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Category</th>
                    <th>Date</th>
                </tr>
                </thead>

                <tbody>
                {expenses.map((el, index) =>
                <tr key={el.id}>
                    <td>{index + 1}</td> 
                    <td>{el.expense.description} </td>
                    <td>{el.expense.amount}</td>
                    <td>{el.expense.category}</td>
                    <td>{el.expense.date ? el.expense.date : date}</td>
                </tr>
                )}
                </tbody>

                <tfoot className="exp--foot">    
                <tr>
                    <td></td>
                    <td>Total</td>
                    <td>{totalAmounts()}</td>
                    <td></td>
                    <td></td>                    
                </tr>
                </tfoot>

            </table>            
                      
        </div>
    )
};

export default Expenses;