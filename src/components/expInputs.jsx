import React from 'react';

const ExpInputs = ({handleExpChange, expense, handleExpSubmit}) => {
    return(
        
        <div>                       
            <div>Add new expense:
            <form action="" onSubmit={handleExpSubmit}>
                
                <input 
                type="text" 
                placeholder="Description..." 
                name="description" 
                value={expense.description} 
                onChange={handleExpChange}
                required
                />

                <input 
                type="number" 
                placeholder="amount" 
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
                <button type="submit">ADD</button>
            </form>
            </div>                      
                              
        </div>
    )
};

export default ExpInputs;