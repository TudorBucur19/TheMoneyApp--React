import React, { useContext, useState } from 'react';
import './OperationsInputs.scss';
import OperationsContextProvider from '../../contexts/OperationsContext';
import { OperationsContext } from '../../contexts/OperationsContext';

const OperationsForm = () => {
    const { operation, onSubmit, handleChange } = useContext(OperationsContext)
    const [expenseCategories, setExpenseCategories] = useState(["Groceries", "Rent", "Utilities", "Car"]);
    const [incomeCategories, setIncomeCategories] = useState(["Salary", "Stocks", "Bonus"]);

    
    const handleCategoryUpdate = () => {
        const newCategory = prompt("Add new category!");
        const newList = (array) => 
        [...array.slice(0, array.length-1), newCategory, ...array.slice(array.length-1)];
        try{
                operation.type === "expense" ?
                newCategory.length > 0 && setExpenseCategories(newList(expenseCategories)) :
                operation.type === "income" ?  
                newCategory.length > 0 && setIncomeCategories(newList(incomeCategories)) :
                alert("Select an option") 
            }               
             catch(err) {
                alert(err.message);
            }
    };

    const getBtnStyle = () => {
        let classes;
        classes = operation.type === "expense" ? "buttons-exp" :
                  operation.type === "income" ? "buttons-inc" :
                  "";
                return classes;        
    }

    
    return(
        
        <div>
            <OperationsContextProvider>                       
            <div className="ops-form">Add new operation:
            <form onSubmit={onSubmit}>
                <form onChange={handleChange} value={operation.type}>
                    <input type="radio" name="type" value={"expense"}/>Expense               
                    <input type="radio" name="type" value={"income"}/>Income
                </form>
                
                <input 
                type="text" 
                placeholder="Description..." 
                name="description" 
                value={operation.description} 
                onChange={handleChange}
                required
                maxLength="20"
                />

                <input 
                type="number" 
                placeholder="Amount" 
                name="amount" 
                value={operation.amount} 
                onChange={handleChange}
                required
                />
                
                {operation.type === "expense" &&                
                    <select name="category" onChange={handleChange} value={operation.category} required>
                        {expenseCategories.map((category) => 
                            <option key={category} value={category} >{category}</option>
                            )}
                            <option>Add new category</option>
                    </select>
                }
                    
                {operation.type === "income" &&
                    <select name="category" onChange={handleChange} value={operation.category} required>
                        {incomeCategories.map(category => 
                            <option value={category}>{category}</option>
                            )}
                    </select>
                }

                <input type="date" name="date" onChange={handleChange} value={operation.date}/>                
                <button className={getBtnStyle()} type="submit">ADD</button>
                <button className={getBtnStyle()} onClick={handleCategoryUpdate}>
                    Add New Category
                </button>
                
            </form>
            </div>                      
            </OperationsContextProvider>                     
        </div>
    )
};

export default OperationsForm;