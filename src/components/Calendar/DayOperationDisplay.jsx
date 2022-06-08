import styles from './Calendar.module.scss';

const DayOperationDisplay = ({description, amount, operationType}) => {
    const { operationContainer } = styles;

    return ( 
        <div className={operationContainer}>
            <p>{description}</p>
            <div>
                <span>{operationType === "expense" ? "-" : "+"}</span>
                <span>{amount}</span>
            </div>
        </div>
     );
}
 
export default DayOperationDisplay;