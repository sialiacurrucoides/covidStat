import React from 'react';
import { useAppSelector } from '../../../hooks/reduxHooks';
import styles from './SummaryStat.module.scss';
import Spinner from '../../UI/Spinner/Spinner';

const SummaryStat: React.FC = () => {
    const summary = useAppSelector(state => state.data.summaryStat);

    return (
        <div className={styles.summary} aria-label="summary statistics container">
            <p>Latest cummulative data:</p>
            <ul>
                <li>Deceased: <span>{summary.deceased || <Spinner size={16} width={"16px"}/>}</span></li>
                <li>Infected: <span>{summary.infected || <Spinner size={16}/>}</span></li>
                <li>Active Infected: <span>{summary.activeInfected || <Spinner size={16}/>}</span></li>
                <li>Recovered: <span>{summary.recovered || <Spinner size={16}/>}</span></li>
                <li>Tested: <span>{summary.tested || <Spinner size={16}/>}</span></li>
            </ul>
        </div>
    );
};

export default SummaryStat;