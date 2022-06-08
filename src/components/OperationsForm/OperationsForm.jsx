import React, { useContext, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { OperationsContext } from '../../contexts/OperationsContext';
import { setOperationType } from '../../redux/ducks/operationType';
import Button from '../Common/Button/Button';
import styles from './OperationsForm.module.scss';

const OperationsForm = () => {
    const { register, handleSubmit, reset, formState } = useForm();
    const dispatch = useDispatch();
    const { operationType } = useSelector(state => state);

    const { onSubmit, handleChange } = useContext(OperationsContext)
    const [expenseCategories, setExpenseCategories] = useState(["Groceries", "Rent", "Utilities", "Car", "Add new category"]);
    const [incomeCategories, setIncomeCategories] = useState(["Salary", "Stocks", "Bonus", "Add new category"]);

    const handleTypeChange = (data) => {
        dispatch(setOperationType(data))
    };

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
          reset();
        }
      }, [formState, reset]);

    const handleCategoryUpdate = () => {
        const newCategory = prompt("Add new category!");
        const newList = (array) => 
        [...array.slice(0, array.length-1), newCategory, ...array.slice(array.length-1)];
        
        try{
                operationType === "expense" ?
                newCategory.length > 0 && setExpenseCategories(newList(expenseCategories)) :
                operationType === "income" ?  
                newCategory.length > 0 && setIncomeCategories(newList(incomeCategories)) :
                alert("Please select an option!") 
            }               
             catch(err) {
                alert(err.message);
            }
    };

    const { formContainer, operationsForm } = styles;
    
    return(                     
        <div className={formContainer}>
            <Button 
            children={"Expense"} 
            colorScheme="danger" 
            onClick={() => handleTypeChange('expense')}
            disabled={operationType === 'expense'}
            />
            
            <Button 
            children={"Income"} 
            colorScheme="success" 
            onClick={() => handleTypeChange('income')}
            disabled={operationType === 'income'}
            />

            <form className={operationsForm} onSubmit={handleSubmit(onSubmit)}>                
                <input 
                type="text" 
                placeholder="Description..." 
                {...register('description', {required: true})}
                maxLength="20"
                />
                <input 
                type="number" 
                placeholder="Amount"
                {...register('amount', {required: true})} 
                />
                              
                    <select 
                    {...register('category', {required: true})}
                    name="category" 
                    onChange={(event) => handleChange(event, handleCategoryUpdate)} 
                    >
                            <option selected disabled>Category</option>
                        {
                        operationType === "income" ?
                        incomeCategories.map((category) => 
                            <option key={category} value={category} >{category}</option>)
                        : 
                        expenseCategories.map((category) => 
                            <option key={category} value={category} >{category}</option>)
                        }
                    </select>
                <Button children={`Add ${operationType}`} type="submit" colorScheme={operationType === "expense" ? "danger" : "success"}/>
            </form>         
        </div>                      
    )
};

export default OperationsForm;