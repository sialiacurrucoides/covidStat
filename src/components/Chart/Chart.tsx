
import { useEffect, useState, useRef } from 'react';
import styles from './Chart.module.scss';
import useDataQuery from '../../hooks/useDataQuery';
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks';
import { setSummaryStat } from '../../store/dataSlice';
import LineCh from './Line/Linear';
import AreaCh from './Area/AreaChart';
import BarCh from './Bar/BarChart';
import ScatterPlot from './Scatter/ScatterPlot';
import Spinner from '../Spinner/Spinner';
import DiscreteSlider from '../Slider/Slider';

export type Data = {
    infected: number,
    activeInfected: number,
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
    const sliderPosition = useAppSelector(state => state.data.sliderPosition);
    const [ dataToDisplay, setDataToDisplay ] = useState<Data[] | undefined>([]);
    const dispatch = useAppDispatch();
    const sliderStep = useRef(0.5);


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
            const from = Math.floor((data.length - Number(step) - 1)*sliderPosition);
            const dataSlice = data?.slice(from, from + Number(step) + 1);

            const latest = dataSlice[0];
            dispatch(setSummaryStat({
                deceased: latest.deceased,
                infected: latest.infected,
                recovered: latest.recovered,
                tested: latest.tested,
                activeInfected: latest.activeInfected || null
            }));
            
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
            sliderStep.current = Math.floor(1/(data.length / Number(step))*100)/100;
        }

    }, [data, indices, step, dispatch, sliderPosition]);


    return (
        <div className={styles.chartArea}>
            {isLoading && <div className={styles.spinnerContainer}><Spinner width={"40px"}/></div>}
            {!!dataToDisplay && dataToDisplay?.length > 0 && <div className={styles.chartAndSlider}>
                { <CurrentChart />}
                {<DiscreteSlider step={sliderStep.current}/>}
            </div>}
            {!!error && "An error occured, please try again later."}
        </div>
    );
};

export default Chart;