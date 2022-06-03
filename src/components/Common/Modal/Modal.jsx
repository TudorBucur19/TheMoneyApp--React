import { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { toggleModal } from '../../../redux/ducks/modalStatus';
import useOutsideClick from '../../../utils/customHooks/useOutsideClick';
import Button from '../Button/Button';
import styles from './Modal.module.scss';

const Modal = ({ children, onClose }) => {
    const dispatch = useDispatch();
    const ref = useRef();

    const handleModalStatus = () => {   
        dispatch(toggleModal());
    }

    useOutsideClick(ref, handleModalStatus);

    const { modalOverlay, modalBody } = styles;

    return ( 
        <div className={modalOverlay}>
            <div className={modalBody} ref={ref}>
                {children}
            </div>
            <Button 
            children="Close"
            onClick={() => onClose()}
            />
        </div>
     );
}
 
export default Modal;