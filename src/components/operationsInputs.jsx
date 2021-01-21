import React, { useContext, useState } from 'react';
import OperationsContextProvider from '../contexts/OperationsContext';
import { OperationsContext } from '../contexts/OperationsContext';

const OperationsForm = () => {
    const { operation, onSubmit, handleChange } = useContext(OperationsContext)
    const [expCategories, setExpCategories] = useState(["Groceries", "Rent", "Utilities", "Car"]);
    const [incCategories, setIncCategories] = useState(["Salary", "Stocks", "Bonus"]);
    
    const handleCategUpdate = () => {
        const newCateg = prompt("Add new category!");
        try{
            if(operation.typeOf === "false"){
                newCateg.length > 0 && setExpCategories([...expCategories, newCateg]);
                
                
            }
                newCateg.length > 0 && setIncCategories([...incCategories, newCateg]);
                
                
            } catch(err) {
                alert("Please insert a category name!")
            }
    }

    
    return(
        
        <div>
            <OperationsContextProvider>                       
            <div className="ops-form">Add new operation:
            <form onSubmit={onSubmit}>
                
                <select name="typeOf" onChange={handleChange} value={operation.typeOf} required>
                    <option value="">--Exp/Inc--</option>
                    <option value={false}>-</option>
                    <option value={true}>+</option>
                </select>

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
                
                {operation.typeOf === "false" &&                
                    <select name="category" onChange={handleChange} value={operation.category} required>
                        {expCategories.map(category => 
                            <option value={category}>{category}</option>
                            )}
                        {/* <option value="">--select category--</option>
                        <option value="groceries">Groceries</option>
                        <option value="household">Household</option>
                        <option value="rent">Rent</option>
                        <option value="utilities">Utilities</option> */}
                    </select>
                }
                    
                {operation.typeOf === "true" &&
                    <select name="category" onChange={handleChange} value={operation.category} required>
                        {incCategories.map(category => 
                            <option value={category}>{category}</option>
                            )}
                        {/* <option value="">--select category--</option>
                        <option value="salary">Salary</option>
                        <option value="stocks">Stocks</option>
                        <option value="bonus">Bonus</option>
                        <option value="other">Other...</option> */}
                    </select>
                }

                

                <input type="date" name="date" onChange={handleChange} value={operation.date}/>                
                <button type="submit">ADD</button>

                <button onClick={handleCategUpdate} 
                style={{background: operation.typeOf === "false" ? "#FF5049" : "#05e383" }}>
                    Add Category
                </button>
            </form>
            </div>                      
            </OperationsContextProvider>                     
        </div>
    )
};

export default OperationsForm;