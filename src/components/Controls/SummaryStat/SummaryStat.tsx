import React from 'react';
import { useAppSelector } from '../../../hooks/reduxHooks';
import styles from './SummaryStat.module.scss';

const SummaryStat: React.FC = () => {
    const summary = useAppSelector(state => state.data.summaryStat);

    return (
        <div className={styles.summary}>
            <p>Latest cummulative data:</p>
            <ul>
                <li>Deceased: <span>{summary.deceased}</span></li>
                <li>Infected: <span>{summary.infected}</span></li>
                <li>Active Infected: <span>{summary.activeInfected}</span></li>
                <li>Recovered: <span>{summary.recovered}</span></li>
                <li>Tested: <span>{summary.tested}</span></li>
            </ul>
        </div>
    );
};

export default SummaryStat;