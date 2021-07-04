import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from './reduxHooks';
import { setStep } from '../store/dataSlice';

const useSetStep = () => {

    const initialStep = useAppSelector(state => state.data.step);
    const [displayedStep, setDisplayedStep] = useState(initialStep);
    const dispatch = useAppDispatch();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDisplayedStep(event.target.value);
    };

    useEffect(() => {
        if (displayedStep.length > 0 && Number(displayedStep) > 0 && Number(displayedStep) < 999){
            dispatch(setStep(displayedStep));
        }
        
    }, [displayedStep, dispatch]);

    return { displayedStep, handleChange };
};

export default useSetStep;