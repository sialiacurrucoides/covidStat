import styles from './SetStep.module.scss';
import { Input } from '@material-ui/core';
import useSetStep from '../../../hooks/useSetStep';

const SetStep: React.FC = () => {

    const { displayedStep, handleChange } = useSetStep();

    return (
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
    );
};

export default SetStep;