import React from 'react';
import Button from '../../Common/Button/Button';


const OperationElement = ({ element, elIndex, currentDate, removeAction, updateAction }) => {
    const { id, description, amount, category, date } = element;
    
    return ( 
        <tr>
            <td >{elIndex + 1}</td>
            <td>{description} </td>
            <td>{amount}</td>
            <td>{category}</td>
            <td>{date ? date : currentDate}</td>
            <td>
                <Button onClick={() => removeAction(id)}>Remove</Button>
                <Button onClick={() => updateAction(id, element)}>Edit</Button>
            </td>
        </tr>
     );
}
 
export default OperationElement;