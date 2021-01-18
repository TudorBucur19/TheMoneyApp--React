import React, { useContext } from 'react';
import './header.styles.css';
import { ExpContext } from '../../contexts/ExpensesContext';

const Header = ({totalInc}) => {
    const { totalAmounts } = useContext(ExpContext);

    let monthNumber = new Date().getMonth();
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthName = monthNames[monthNumber];

    // let percentage = ((totalExp/totalInc)*100).toFixed(2);
    // let balance = totalInc - totalExp;

    return(
    <div className="budget-head">
        <div className="budget-title">
            <h3>Available budget in <span>{monthName}</span> </h3>
            <h2>{totalAmounts} Lei</h2>
        </div>

        <div className="incomes">
            <div className="incomes-text">Income <span className="inc--value">{totalInc}  Lei</span></div>
        </div>

        <div className="expenses">
            <div className="expenses-text">Expenses 
                <span className="percentage">{0} %</span> 
                {/* <span className="percentage">{totalInc === 0  ? 0 : percentage} %</span>  */}
                <span className="exp--value">{totalAmounts()}  Lei</span>  
            </div>
        </div>
    </div>
    );
};

export default Header;