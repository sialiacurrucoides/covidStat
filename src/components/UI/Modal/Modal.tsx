import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';

const Backdrop:React.FC<{onClick: () => void}> = ({onClick}) => {
    return <div className={styles.backdrop} onClick={onClick}></div>;
};

const ModalOverlay:React.FC = ({children}) => {
    return <div className={styles.modal}>
        <div className={styles.content}>{children}</div>
    </div>;
};

const portalElement: HTMLElement|null = document.getElementById('overlays');

const Modal:React.FC<{onClose: () => void}> = ({children, onClose}) => {
    return (
        <>
            {!!portalElement && ReactDOM.createPortal(<Backdrop onClick={onClose}/>, portalElement)}
            {!!portalElement && ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
        </>
    );
};

export default Modal;