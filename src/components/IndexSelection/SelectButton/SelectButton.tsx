import React from 'react';
import styles from './SelectButton.module.scss';
import CustomSelection from '../CustomSelection/CustomSelection';

const SelectButton: React.FC<{
    name: string, 
    active: boolean, 
    isOpen: boolean,
    onClose: () => void,
    onClick: (ev: React.MouseEvent<HTMLButtonElement>) => void
}> = ({ name, active, isOpen, onClick, onClose }) => {

    return (
        <>
        <button className={active ? styles.activeSelectButton : styles.selectButton}
            onClick={onClick}
            data-id={name}
            >
            {name}
        </button>
        {isOpen && <CustomSelection onClose={onClose} />}
        </>
    );
};

export default SelectButton;