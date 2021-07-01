
import { useEffect, useState } from 'react';
import styles from './Chart.module.scss';
import useDataQuery from '../../hooks/useDataQuery';
import { useAppSelector } from '../../hooks/reduxHooks';
import Linear from './Linear/Linear';

export type Data = {
    infected: number,
    deceased: number,
    recovered: number,
    quarantined: number,
    tested: number,
    sourceUrl: string,
    lastUpdatedAtApify: string,
    readMe: string
};

const Chart = () => {
    const { data, isLoading, error } = useDataQuery();
    const indices = useAppSelector(state => state.data.selectedIndices);
    const step = useAppSelector(state => state.data.step);
    const [ dataToDisplay, setDataToDisplay ] = useState<Data[] | undefined>([]);

    useEffect(() => {
        if (!!data && data.length > 0){
            const from = data.length - Number(step);
            setDataToDisplay(data?.slice(from, from + Number(step)));
            console.log(from, data?.slice(from,from + 2));
        }

    }, [data, indices, step]);


    return (
        <div className={styles.chartArea}>
            {isLoading && "loading..."}
            {!!dataToDisplay && dataToDisplay?.length > 0 && <Linear dataToDisplay={dataToDisplay} indices={indices} />}
            {!!error && "An error occured, please try again later."}
        </div>
    );
};

export default Chart;