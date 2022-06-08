import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../../redux/ducks/modalStatus';
import Button from '../Common/Button/Button';
import styles from './Calendar.module.scss';
import DayOperationDisplay from './DayOperationDisplay';

const Day = ({ day, onClick }) => {
    const [isVisible, setIsVisible] = useState(false);
    const isPaddingDay = day.value === 'padding';
    const dispatch = useDispatch();
    const { operationsLists } = useSelector(state => state);

    const dayExpenses = operationsLists.expenses.filter(expense => expense.date === day.date);
    const dayIncomes = operationsLists.incomes.filter(income => income.date === day.date);
    const dayOperations = [...dayExpenses, ...dayIncomes];

    const { 
        daySquare, 
        daySquare_header, 
        daySquare_header_dayNo, 
        daySquare_header_action, 
        paddingDay, 
        hidden, 
        visible,
    } = styles;

    return ( 
        <div 
        className={`${isPaddingDay ? paddingDay : ""} ${daySquare}`}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onClick={onClick}
        >
            {!isPaddingDay && 
            <>
            <div className={daySquare_header}>
                <span className={daySquare_header_dayNo}>
                    {day.value}                
                </span>
                <div className={daySquare_header_action}>                    
                    <span className={isVisible && hidden}>
                        9800
                    </span>                        
                </div>
                <span className={`${isVisible ? visible : ""} ${hidden}`}>
                    <Button
                    children="+"
                    style="round"
                    onClick={() => dispatch(toggleModal())}
                    />
                </span>                
            </div>            
            </>
            }
            {dayOperations.length && dayOperations.map(operation => (
                <DayOperationDisplay
                key={operation.id}
                description={operation.description}
                amount={operation.amount}
                operationType={operation.type}
                />
            ))}

        </div> 
    );
}
 
export default Day;