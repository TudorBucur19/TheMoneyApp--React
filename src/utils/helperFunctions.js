export const totalAmountCalculator = (list) => list.reduce((total, el) => total = total + Number(el.amount), 0);

export const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const getCurrentDate = () => {
    let monthNumber = new Date().getMonth();
    return monthNames[monthNumber];
}