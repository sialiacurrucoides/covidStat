import styles from './IndexSelection.module.scss';
import SelectButton from './SelectButton/SelectButton';
import { covidIndices  } from '../../constants/constants';

const IndexSelection: React.FC = () => {
    return (
        <div className={styles.selectionArea}>
            { Array.from(covidIndices).map(inx => <SelectButton key={inx} name={inx} />)}
        </div>
    );
};

export default IndexSelection;