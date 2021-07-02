
import { useEffect, useState } from 'react';
import styles from './Chart.module.scss';
import useDataQuery from '../../hooks/useDataQuery';
import { useAppSelector } from '../../hooks/reduxHooks';
import LineCh from './Line/Linear';
import AreaCh from './Area/AreaChart';
import BarCh from './Bar/BarChart';
import ScatterPlot from './Scatter/ScatterPlot';

export type Data = {
    infected: number,
    deceased: number,
    recovered: number,
    quarantined: number,
    tested: number,
    sourceUrl: string,
    lastUpdatedAtApify: string,
    readMe: string,
    [key: string]: string | number
};

const Chart = () => {
    const { data, isLoading, error } = useDataQuery();
    const indices = useAppSelector(state => state.data.selectedIndices);
    const step = useAppSelector(state => state.data.step);
    const chartType = useAppSelector(state => state.data.selectedChartType);
    const [ dataToDisplay, setDataToDisplay ] = useState<Data[] | undefined>([]);

    const CurrentChart: React.FC = () => {
        
        switch(chartType) { 
            case 'area': { 
               return <AreaCh dataToDisplay={dataToDisplay} indices={indices}/>
            } 
            case 'bar': { 
                return <BarCh dataToDisplay={dataToDisplay} indices={indices}/>
            } 
            case 'line': { 
                return <LineCh dataToDisplay={dataToDisplay} indices={indices}/>
             } 
             case 'scatter': { 
                return <ScatterPlot dataToDisplay={dataToDisplay} indices={indices}/>
             } 
            default: { 
                return <AreaCh dataToDisplay={dataToDisplay} indices={indices}/>
            } 
         } 
    };

    useEffect(() => {
        if (!!data && data.length > 0){
            const from = data.length - Number(step);
            const dataSlice = data?.slice(from - 1, from + Number(step) + 1);

            
            // transform data to plot daily change
            // we need an array one element longer to be able to subtract a previous value
            const transformedData = dataSlice.slice(1, Number(step) + 1).map((data, inx) => ({
                ...data,
                deceased: data.deceased - dataSlice[inx]['deceased'],
                infected: data.infected - dataSlice[inx]['infected'],
                recovered: data.recovered - dataSlice[inx]['recovered'],
                tested: data.tested - dataSlice[inx]['tested']
            }))
            
            setDataToDisplay(transformedData);
 
        }

    }, [data, indices, step]);


    return (
        <div className={styles.chartArea}>
            {isLoading && "loading..."}
            {!!dataToDisplay && dataToDisplay?.length > 0 && <CurrentChart />}
            {!!error && "An error occured, please try again later."}
        </div>
    );
};

export default Chart;