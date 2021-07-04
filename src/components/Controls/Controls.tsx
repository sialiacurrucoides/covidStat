import styles from './Controls.module.scss';
import SelectChart from './SelectChart/SelectChart';
import SummaryStat from './SummaryStat/SummaryStat';
import SetStep from './SetStep/SetStep';

const Controls: React.FC = () => {

    return (
        <div className={styles.controls}>
            <div className={styles.realControls}>
                <SetStep />
                <SelectChart />
            </div>
            <SummaryStat />
        </div>
    );
};

export default Controls;