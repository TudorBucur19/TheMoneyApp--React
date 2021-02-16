import React, { useContext, useState } from 'react';
import './OperationsInputs.scss';
import OperationsContextProvider from '../../contexts/OperationsContext';
import { OperationsContext } from '../../contexts/OperationsContext';

const OperationsForm = () => {
    const { operation, onSubmit, handleChange, monthNames, getHistoryMonth, useEntries } = useContext(OperationsContext)
    const [expenseCategories, setExpenseCategories] = useState(["Groceries", "Rent", "Utilities", "Car", "Add new category"]);
    const [incomeCategories, setIncomeCategories] = useState(["Salary", "Stocks", "Bonus", "Add new category"]);

    
    const handleCategoryUpdate = () => {
        const newCategory = prompt("Add new category!");
        const newList = (array) => 
        [...array.slice(0, array.length-1), newCategory, ...array.slice(array.length-1)];
        
        try{
                operation.type === "expense" ?
                newCategory.length > 0 && setExpenseCategories(newList(expenseCategories)) :
                operation.type === "income" ?  
                newCategory.length > 0 && setIncomeCategories(newList(incomeCategories)) :
                alert("Please select an option!") 
            }               
             catch(err) {
                alert(err.message);
            }
    };

    const getBtnStyle = () => {
        let classes;
        classes = operation.type === "expense" ? "expense-btn" :
                  operation.type === "income" ? "income-btn" :
                  "";
                return classes;        
    }

    
    return(
        
        <div>
            <OperationsContextProvider>                       
            <div>
                <form className="operations-form" onSubmit={onSubmit}>
                    <form className="operation-type" onChange={handleChange} value={operation.type}>
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
                                  
                        <select 
                        name="category" 
                        onChange={(event) => handleChange(event, handleCategoryUpdate)} 
                        value={operation.category} 
                        required>

                                <option selected disabled>Category</option>
                            {
                            operation.type === "expense" ? 
                            expenseCategories.map((category) => 
                                <option key={category} value={category} >{category}</option>)
                            : 
                            operation.type === "income" ?
                            incomeCategories.map((category) => 
                                <option key={category} value={category} >{category}</option>)
                            :
                            console.log("no option")
                            }
                        </select>
                    
                    
                    {/* {operation.type === "expense" &&                
                        <select name="category" onChange={(event) => handleChange(event, handleCategoryUpdate)} value={operation.category} required>
                                <option selected disabled>Category</option>
                            {expenseCategories.map((category) => 
                                <option key={category} value={category} >{category}</option>
                                )}
                        </select>
                    }
                        
                    {operation.type === "income" &&
                        <select name="category" onChange={(event) => handleChange(event, handleCategoryUpdate)} value={operation.category} required>
                                <option selected disabled>Category</option>
                            {incomeCategories.map(category => 
                                <option value={category}>{category}</option>
                                )}
                        </select>
                    } */}

                    <input 
                    type="date"
                    name="date" 
                    onChange={handleChange} 
                    value={operation.date}/> 
                                   
                    <button className={getBtnStyle()} type="submit">ADD</button>                    
                </form>
                
                {/* <select name="historyMonth" onChange={getHistoryMonth}>
                    { monthNames.map(month =>
                        <option key={month} value={month}>{month}</option>
                    )
                    }
                </select> */}
                
            </div>                      
            </OperationsContextProvider>                     
        </div>
    )
};

export default OperationsForm;