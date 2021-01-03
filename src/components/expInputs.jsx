import React from 'react';

const ExpInputs = ({handleChange, expense, handleSubmit}) => {
    return(
        
        <div>                       
            <div>Add new expense:
            <form action="" onSubmit={handleSubmit}>
                
                <input 
                type="text" 
                placeholder="Description..." 
                name="description" 
                value={expense.description} 
                onChange={handleChange}
                required
                />

                <input 
                type="number" 
                placeholder="amount" 
                name="amount" 
                value={expense.amount} 
                onChange={handleChange}
                required
                />

                <select name="category" onChange={handleChange} value={expense.category} required>
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