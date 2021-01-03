import React from 'react';
import './header.styles.css';

const Header = ({totalExp, totalInc}) => {

    let monthNumber = new Date().getMonth();
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthName = monthNames[monthNumber];

    let currentTotalExp = totalExp.reduce((total, el) => total = total + el, 0);
    let currentTotalInc = totalInc.reduce((total, el) => total = total + el, 0);
    let percentage = ((currentTotalExp/currentTotalInc)*100).toFixed(2);

    return(
    <div className="budget-head">
        <div className="budget-title">
            <h3>Available budget in <span>{monthName}</span> </h3>
            <h2>+ 2345.64</h2>
        </div>

        <div className="incomes">
            <div className="incomes-text">Income <span className="incValue">{currentTotalInc}</span></div>
        </div>

        <div className="expenses">
            <div className="expenses-text">Expenses <span className="expValue">{currentTotalExp}</span> <span className="percentage">{percentage} %</span> </div>
        </div>
    </div>
    );
};

export default Header;