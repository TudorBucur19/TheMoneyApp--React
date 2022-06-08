import React, { createContext, useState, useEffect } from 'react';
import firebase from '../utils/firebase';
import { useSelector } from 'react-redux';
import { getCurrentDate } from '../utils/helperFunctions';
import useCalendar from '../utils/customHooks/useCalendar';

export const OperationsContext = createContext();

const OperationsContextProvider = (props) => {    
    const [operation, setOperation] = useState({});
    const { operationType } = useSelector(state => state);
    const currentMonth = getCurrentDate();   
    const { clickedDay } = useSelector(state => state); 

    const editOperation = {
        description: "test", 
        amount: 330, 
        category: "newcateg", 
        type: "expense", 
        date: "2021-01-20"
    }

    const [historyMonth, setHistoryMonth] = useState(currentMonth);
    
    
    const handleChange = (event, callBack) => {
        const value = event.target.value;
        if (value === "Add new category") {
            callBack()
            return;
        };
        
        setOperation({
          ...operation, 
          [event.target.name]: value
        });
      };

    // ADDING OPERATIONS TO DATABASE  

    function onSubmit(data)  {
        firebase.firestore()
        .collection(`${currentMonth}`)
        .add({
            ...data,
            date: clickedDay,
            type: operationType
        })
    }

    //REMOVE ITEMS FROM DATABASE
    const removeItem = (id) => {
        firebase
        .firestore()
        .collection(`${currentMonth}`)
        .doc(id)
        .delete()
        .then(() => console.log("Document was deleted"))
        .catch((error) => console.error("Error deleting document", error));
    };

    // EDIT ITEMS IN DATABASE
    const updateItem = (id, item) => {
        firebase
        .firestore()
        .collection(`${currentMonth}`)
        .doc(id)
        .update({operation: {...editOperation}})
        .then(() => console.log("Document was updated"))
        .catch((error) => console.error("Error deleting document", error));
    };

    const getHistoryMonth = (e) => {
        setHistoryMonth(e.target.value);       
    }


    const values = { 
        operation, 
        onSubmit, 
        handleChange, 
        removeItem, 
        updateItem,  
        getHistoryMonth, 
        historyMonth 
    }
    
    return ( 
        <OperationsContext.Provider value={ values }>
            {props.children}
        </OperationsContext.Provider>
     );
}
 
export default OperationsContextProvider;