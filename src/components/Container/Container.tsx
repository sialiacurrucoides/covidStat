import { ReactComponent as Virus } from '../../assets/virus.svg';
import styles from './Container.module.scss';
import Heading from '../Heading/Heading';
import IndexSelection from '../IndexSelection/IndexSelection';
import Controls from '../Controls/Controls';
import Chart from '../Chart/Chart';

const Container: React.FC = () => {
    return (
        <>
        <Virus className={styles.smallVirus} />
        <div className={styles.container}>
            <Heading />
            <IndexSelection />
            <div className={styles.displayData}>
                <Controls />
                <Chart />
            </div>
        </div>
        <Virus className={styles.bigVirus} />
        </>
    );
};

export default Container;