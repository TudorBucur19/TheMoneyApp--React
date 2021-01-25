import React, { useContext, useState } from 'react';
import './OperationsInputs.scss';
import OperationsContextProvider from '../../contexts/OperationsContext';
import { OperationsContext } from '../../contexts/OperationsContext';

const OperationsForm = () => {
    const { operation, onSubmit, handleChange } = useContext(OperationsContext)
    const [expCategories, setExpCategories] = useState(["Groceries", "Rent", "Utilities", "Car"]);
    const [incCategories, setIncCategories] = useState(["Salary", "Stocks", "Bonus"]);
    
    const handleCategUpdate = () => {
        const newCateg = prompt("Add new category!");
        try{
                operation.type === "expense" ?
                newCateg.length > 0 && setExpCategories([...expCategories, newCateg]) :
                operation.type === "income" ?  
                newCateg.length > 0 && setIncCategories([...incCategories, newCateg]) :
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
                        {expCategories.map((category) => 
                            <option value={category} >{category}</option>
                            )}
                    </select>
                }
                    
                {operation.type === "income" &&
                    <select name="category" onChange={handleChange} value={operation.category} required>
                        {incCategories.map(category => 
                            <option value={category}>{category}</option>
                            )}
                    </select>
                }

                <input type="date" name="date" onChange={handleChange} value={operation.date}/>                
                <button className={getBtnStyle()} type="submit">ADD</button>
                <button className={getBtnStyle()} onClick={handleCategUpdate}>
                    Add New Category
                </button>
                
            </form>
            </div>                      
            </OperationsContextProvider>                     
        </div>
    )
};

export default OperationsForm;