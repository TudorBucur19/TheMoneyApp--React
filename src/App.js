import './App.scss';
import React from 'react';
import OperationsForm from './components/OperationsForm/OperationsForm';
import Operations from './components/OperationsDisplay/Operations';
import Header from './components/Header/Header';
import OperationsContextProvider from './contexts/OperationsContext';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Calendar from './components/Calendar/Calendar';


function App() {

  return (
    <div className="App">
      <Provider store={store}>
      <OperationsContextProvider>        
          <Header/>
          
          <div className="input-fields">
            <OperationsForm/>          
          </div>

          <div className="tables">
            <Operations/>
          </div>
          <Calendar/>
      </OperationsContextProvider>    
      </Provider>
    </div>
  );
}

export default App;
