import React from 'react';
import { Provider } from 'react-redux';

import OperationsContextProvider from './contexts/OperationsContext';
import store from './redux/configureStore';
import Operations from './components/OperationsDisplay/Operations';
import Header from './components/Header/Header';
import Calendar from './components/Calendar/Calendar';
import './App.scss';


function App() {

  return (
    <div className="App">
      <Provider store={store}>
      <OperationsContextProvider>        
          <Header/>
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
