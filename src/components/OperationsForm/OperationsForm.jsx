import React, { useContext, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { OperationsContext } from '../../contexts/OperationsContext';
import Button from '../Common/Button/Button';
import OperationsCategories from '../OperationsCategories/OperationsCategories';
import styles from './OperationsForm.module.scss';
import { toggleModal } from '../../redux/ducks/modalStatus';

const OperationsForm = () => {
    const { register, handleSubmit, reset, formState } = useForm();
    const dispatch = useDispatch();
    const { operationType } = useSelector(state => state);

    const { onSubmit } = useContext(OperationsContext)
    const [expenseCategories, setExpenseCategories] = useState(["Groceries", "Rent", "Utilities", "Car", "Add new category"]);
    const [incomeCategories, setIncomeCategories] = useState(["Salary", "Stocks", "Bonus", "Add new category"]);


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

    const { formContainer, formContainerActions } = styles;
    
    return(                     
        <div className={formContainer}>
            <div>
                <input 
                type="number" 
                placeholder="Amount"
                {...register('amount', {required: true})} 
                />
            </div>            
            <div>
                <OperationsCategories/>
            </div>
            <div>
                <input 
                type="text" 
                placeholder="Description..." 
                {...register('description', {required: true})}
                maxLength="20"
                />
            </div>
            <div className={formContainerActions}>
                <Button 
                type="submit"
                onClick={handleSubmit(onSubmit)}
                >
                    Create
                </Button>
            </div>
        </div>                      
    )
};

export default OperationsForm;