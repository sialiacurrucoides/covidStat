import React, { useState } from 'react';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { addSelectedIndex, removeSelectedIndex } from '../../../store/dataSlice';
import styles from './SelectButton.module.scss';

const SelectButton: React.FC<{name: string}> = ({ name }) => {
    const [active, setActive] = useState(false);
    const dispatch = useAppDispatch();

    const handleClick = () => {
        if (!active) dispatch(addSelectedIndex(name));
        else dispatch(removeSelectedIndex(name));
        setActive(prev => !prev);
    };

    return (
        <button className={active ? styles.activeSelectButton : styles.selectButton}
            onClick={handleClick}>
            {name}
        </button>
    );
};

export default SelectButton;