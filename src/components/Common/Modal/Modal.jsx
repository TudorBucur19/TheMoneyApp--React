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

    const { modalOverlay, modalBody, modalBody_actions, modalBody_content } = styles;

    return ( 
        <div className={modalOverlay}>
            <div className={modalBody} ref={ref}>
                <div className={modalBody_content}>
                    {children}
                </div>
                {/* <div className={modalBody_actions}>
                    <Button 
                    children="Close"
                    onClick={() => onClose()}
                    />
                </div>                 */}
            </div>
            
        </div>
     );
}
 
export default Modal;