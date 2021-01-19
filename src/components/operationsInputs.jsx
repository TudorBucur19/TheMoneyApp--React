import React, { useContext } from 'react';
import OperationsContextProvider from '../contexts/OperationsContext';
import { OperationsContext } from '../contexts/OperationsContext';

const OperationsForm = () => {
    const { operation, onSubmit, handleExpChange } = useContext(OperationsContext)
    return(
        
        <div>
            <OperationsContextProvider>                       
            <div>Add new operation:
            <form onSubmit={onSubmit}>
                
                <select name="typeOf" onChange={handleExpChange} value={operation.typeOf} required>
                    <option value="+">+</option>
                    <option value="-">-</option>
                </select>

                <input 
                type="text" 
                placeholder="Description..." 
                name="description" 
                value={operation.description} 
                onChange={handleExpChange}
                required
                maxLength="20"
                />

                <input 
                type="number" 
                placeholder="Amount" 
                name="amount" 
                value={operation.amount} 
                onChange={handleExpChange}
                required
                />

                <select name="category" onChange={handleExpChange} value={operation.category} required>
                    <option value="">--select category--</option>
                    <option value="groceries">Groceries</option>
                    <option value="household">Household</option>
                    <option value="rent">Rent</option>
                    <option value="utilities">Utilities</option>
                </select>

                <input type="date" name="date" onChange={handleExpChange} value={operation.date}/>                
                <button type="submit">ADD</button>
            </form>
            </div>                      
            </OperationsContextProvider>                     
        </div>
    )
};

export default OperationsForm;