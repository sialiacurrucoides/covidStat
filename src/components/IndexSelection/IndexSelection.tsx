import React, { useState } from 'react';
import styles from './IndexSelection.module.scss';
import SelectButton from './SelectButton/SelectButton';
import { covidIndices  } from '../../constants/constants';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { addSelectedIndex, removeSelectedIndex } from '../../store/dataSlice';

const covidIndicesArray = Array.from(covidIndices);
const initialButtonsState = covidIndicesArray.map(index => false);

const IndexSelection: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [buttonsState, setButtonsState] = useState(initialButtonsState);
    const dispatch = useAppDispatch();

    const handleClick = (ev: React.MouseEvent) => {
        const indicator = ev.currentTarget.getAttribute('data-id');

        if (indicator === 'custom' && !buttonsState[covidIndicesArray.indexOf('custom')]){
            setIsOpen(true);
        }

        if (!!indicator && covidIndices.has(indicator)){
            const currentIndex = covidIndicesArray.indexOf(indicator);
            if (buttonsState[currentIndex]){
                dispatch(removeSelectedIndex(indicator));
            } else {
                dispatch(addSelectedIndex(indicator));
            }
            setButtonsState(prev => {
                const newState = [...prev];
                newState[currentIndex] = !newState[currentIndex];
                return newState;
            });
        }

    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div className={styles.selectionArea}>
            { Array.from(covidIndices).map((indicator, inx) => <SelectButton 
            key={indicator} 
            name={indicator}
            active={buttonsState[inx]}
            onClick={handleClick}
            onClose={handleClose}
            isOpen={isOpen}
             />)}
        </div>
    );
};

export default IndexSelection;