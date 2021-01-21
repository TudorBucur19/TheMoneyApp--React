import './App.scss';
import React, {useState} from 'react';
import OperationsForm from './components/operationsInputs';
import Operations from './components/operationsDisplay/operations';
import Header from './components/header/header';
import OperationsContextProvider from './contexts/OperationsContext';


function App() {

  return (
    <div className="App">
      <OperationsContextProvider>        
          <Header/>
          <div className="input--fields">
            <OperationsForm/>          
          </div>

          <div className="tables">
            <Operations/>
          </div>
      </OperationsContextProvider>    
    </div>
  );
}

export default App;
