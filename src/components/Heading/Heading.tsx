import styles from './Heading.module.scss';

const Heading: React.FC = () => {
    return (
        <div className={styles.heading}>
            <h1>Hungarian COVID-19 statistics</h1>
            <h3>Choose the data you are interested in</h3>
        </div>
    );
};

export default Heading;