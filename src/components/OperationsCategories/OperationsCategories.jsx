import React from 'react';
import { useDispatch } from 'react-redux';

import { defaultExpenses, defaultIncomes } from '../../utils/opCategories';
import { setOperationCategory } from '../../redux/ducks/operationCategory';
import styles  from './OperationsCategories.module.scss';
import CategoryItem from './CategoryItem';

const OperationsCategories = () => {
    const dispatch = useDispatch();
    const { container, divider, categoriesContainer, categoriesContainer_expenses, categoriesContainer_incomes } = styles;

    return ( 
        <div className={container} >
            <div className={categoriesContainer}>
                {defaultExpenses.map(category => (
                    <CategoryItem
                    category={category}
                    onClick={() => dispatch(setOperationCategory({category: category.name, type: category.type}))}
                    />
                ))}
            </div>
            <div className={divider}>Incomes</div>
            <div className={categoriesContainer}>
                {defaultIncomes.map(category => (
                    <CategoryItem
                    category={category}
                    onClick={() => dispatch(setOperationCategory({category: category.name, type: category.type}))}
                    />
                ))}
            </div>
            
        </div>
     );
}
 
export default OperationsCategories;