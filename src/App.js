import './App.scss';
import React from 'react';
import OperationsForm from './components/operationsInputs/OperationsInputs';
import Operations from './components/operationsDisplay/Operations';
import Header from './components/header/Header';
import OperationsContextProvider from './contexts/OperationsContext';


function App() {

  return (
    <div className="App">
      <OperationsContextProvider>        
          <Header/>
          
          <div className="input-fields">
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
