import React, { createContext, useState, useEffect } from 'react';
import firebase from '../utils/firebase';

export const OperationsContext = createContext();


const OperationsContextProvider = (props) => {
    
    const [operation, setOperation] = useState({});
    const operations = useEntries();
    

    const editOperation = {
        description: "test", 
        amount: 330, 
        category: "newcateg", 
        type: "expense", 
        date: "2021-01-20"
    }

    const expenses = operations.filter(el => el.operation.type === "expense");
    const incomes = operations.filter(el => el.operation.type === "income");

    let monthNumber = new Date().getMonth();
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let currentMonth = monthNames[monthNumber];

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
    const db = firebase.firestore();

    function onSubmit(event)  {
        event.preventDefault()
  
        db.collection(`${currentMonth}`)
        .add({
            operation
        })
        .then(() => {
          setOperation({
            description: "",
            amount: "",
            category: "",
            date: "",
            type: operation.type          
          }); 
        }) 
    }

    // GETTING OPERATIONS LIST FROM DATABASE
    function useEntries() {
        const [entries, setEntries] = useState([]);
        
        useEffect(() => {
            const unsubscribe = db
            .collection(`${currentMonth}`)
            .onSnapshot((snapshot) => {
                const newEntry = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setEntries(newEntry);
                })
            return () => unsubscribe();
        },[])
    
        return entries;
    };

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
        expenses, 
        incomes,
        currentMonth, 
        removeItem, 
        updateItem, 
        monthNames, 
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