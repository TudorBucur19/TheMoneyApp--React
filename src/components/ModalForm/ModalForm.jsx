import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import { OperationsContext } from '../../contexts/OperationsContext';

export default function EditForm() {
    const {toggleModal, isOpen} = useContext(OperationsContext);
    // const [isOpen, setIsOpen] = useState(false);
  
    // function toggleModal() {
    //   setIsOpen(!isOpen);
    // }
  
    return (
      <div className="App">
        {/* <button onClick={toggleModal}>Open modal</button> */}
  
        <Modal
          isOpen={isOpen}
          onRequestClose={toggleModal}
          contentLabel="My dialog"
        >
          <div>
              <form>
                  <input type="text" name="description"/>
                  <input type="number" name="description"/>
                  <button>ADD</button>
              </form>
          </div>
          <button onClick={toggleModal}>Close modal</button>
        </Modal>
      </div>
    );
  }