import { useState, useEffect } from 'react';
import styles from './Controls.module.scss';
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks';
import { setStep } from '../../store/dataSlice';
import SelectChart from './SelectChart/SelectChart';
import { Input } from '@material-ui/core';

const Controls: React.FC = () => {

    const initialStep = useAppSelector(state => state.data.step);
    const [displayedStep, setDisplayedStep] = useState(initialStep);
    const dispatch = useAppDispatch();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDisplayedStep(event.target.value);
    };

    useEffect(() => {
        dispatch(setStep(displayedStep));
    }, [displayedStep, dispatch]);

    return (
        <div className={styles.controls}>
            <div>
                <span>Step size (x-axis): </span>
                <Input
                    style={{width: "40px"}}
                    id="standard-basic"
                    type="number"
                    value={displayedStep}
                    onChange={handleChange}
                    />
                <span> days</span>
            </div>
            <SelectChart />
        </div>
    );
};

export default Controls;