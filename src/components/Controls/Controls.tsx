import { useState, useEffect } from 'react';
import styles from './Controls.module.scss';
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks';
import { setStep } from '../../store/dataSlice';

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
                <input type="text" value={displayedStep} onChange={handleChange}/>
                <span> days</span>
            </div>
            <div>select chart type</div>
        </div>
    );
};

export default Controls;