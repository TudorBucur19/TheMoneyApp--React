import React, { useContext } from 'react';
import ExpContextProvider from '../contexts/ExpensesContext';
import { ExpContext } from '../contexts/ExpensesContext';

const ExpInputs = () => {
    const { expense, onSubmit, handleExpChange } = useContext(ExpContext)
    return(
        
        <div>
            <ExpContextProvider>                       
            <div>Add new expense:
            <form onSubmit={onSubmit}>
                
                <input 
                type="text" 
                placeholder="Description..." 
                name="description" 
                value={expense.description} 
                onChange={handleExpChange}
                required
                maxLength="20"
                />

                <input 
                type="number" 
                placeholder="Amount" 
                name="amount" 
                value={expense.amount} 
                onChange={handleExpChange}
                required
                />

                <select name="category" onChange={handleExpChange} value={expense.category} required>
                    <option value="">--select category--</option>
                    <option value="groceries">Groceries</option>
                    <option value="household">Household</option>
                    <option value="rent">Rent</option>
                    <option value="utilities">Utilities</option>
                </select>

                <input type="date" name="date" onChange={handleExpChange} value={expense.date}/>                
                <button type="submit">ADD</button>
            </form>
            </div>                      
            </ExpContextProvider>                     
        </div>
    )
};

export default ExpInputs;