import React from 'react';
// import { useAppDispatch } from '../../../hooks/reduxHooks';
// import { addSelectedIndex, removeSelectedIndex } from '../../../store/dataSlice';
import styles from './SelectButton.module.scss';
import CustomSelection from '../CustomSelection/CustomSelection';

const SelectButton: React.FC<{
    name: string, 
    active: boolean, 
    isOpen: boolean,
    onClose: () => void,
    onClick: (ev: React.MouseEvent<HTMLButtonElement>) => void
}> = ({ name, active, isOpen, onClick, onClose }) => {
    // const [active, setActive] = useState(false);
    // const [isOpen, setIsOpen] = useState(false);
    // const dispatch = useAppDispatch();

    // const handleClose = () => {
    //     setIsOpen(false);
    // }

    // const handleClick = () => {
    //     if (!active) {
    //         if (name === 'custom'){
    //             setIsOpen(true);
    //         }
    //         dispatch(addSelectedIndex(name));
    //     } else dispatch(removeSelectedIndex(name));
    //     setActive(prev => !prev);
    // };

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