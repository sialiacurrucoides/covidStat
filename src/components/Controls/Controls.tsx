import { useState, useEffect } from 'react';
import styles from './Controls.module.scss';
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks';
import { setStep } from '../../store/dataSlice';
import SelectChart from './SelectChart/SelectChart';
import SummaryStat from './SummaryStat/SummaryStat';
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
            <div className={styles.realControls}>
                <div>
                    <span>Step size (x-axis): </span>
                    <Input
                        className={styles.input}
                        id="standard-basic"
                        type="number"
                        value={displayedStep}
                        onChange={handleChange}
                        />
                    <span> days</span>
                </div>
                <SelectChart />
            </div>
            <SummaryStat />
        </div>
    );
};

export default Controls;