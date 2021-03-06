
import { useEffect, useState, useRef, useMemo } from 'react';
import styles from './Chart.module.scss';
import useDataQuery from '../../hooks/useDataQuery';
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks';
import { setSummaryStat } from '../../store/dataSlice';
import LineCh from './Line/Linear';
import AreaCh from './Area/AreaChart';
import BarCh from './Bar/BarChart';
import ScatterPlot from './Scatter/ScatterPlot';
import BiaxialLineCh from './BiaxialLine/BiaxialLine';
import Spinner from '../UI/Spinner/Spinner';
import XAxisSliderControl from '../XAxisSliderControl/XAxisSliderControl';
import calcCustomData from '../../utils/calcCustomData';

export type Data = {
    infected: number,
    activeInfected: number,
    deceased: number,
    recovered: number,
    quarantined: number,
    tested: number,
    sourceUrl: string,
    lastUpdatedAtSource: string,
    readMe: string,
    custom?: number,
    [key: string]: string | number | undefined
};

const Chart = () => {
    const { data, isLoading, error } = useDataQuery();
    const indices = useAppSelector(state => state.data.selectedIndices);
    const step = useAppSelector(state => state.data.step);
    const chartType = useAppSelector(state => state.data.selectedChartType);
    const sliderPosition = useAppSelector(state => state.data.sliderPosition);
    const [ dataToDisplay, setDataToDisplay ] = useState<Data[] | undefined>([]);
    const { variable1, variable2, operator } = useAppSelector(state => state.data.custom);
    const dispatch = useAppDispatch();
    const sliderStep = useRef(0.5);
    const startDate = useMemo(() => {
        if (!!data && data.length > 0){
            return data[0]?.lastUpdatedAtApify?.toString();
        }
        return 'First date';
    }, [data]);
    const endDate = useMemo(() => {
        if (!!data && data.length > 0){
        return data[data.length - 1]?.lastUpdatedAtApify?.toString();}
        return 'Last date';
    }, [data]);
    const customName = useMemo(() => {
        return `${variable1} ${operator} ${variable2}`
    }, [variable1, variable2, operator])
    console.log("first date", startDate, "last date", endDate);

    const CurrentChart: React.FC = () => {
        
        switch(chartType) { 
            case 'biaxialLine': { 
                return <BiaxialLineCh dataToDisplay={dataToDisplay} indices={indices} customName={customName}/>
             } 
            case 'area': { 
               return <AreaCh dataToDisplay={dataToDisplay} indices={indices} customName={customName}/>
            } 
            case 'bar': { 
                return <BarCh dataToDisplay={dataToDisplay} indices={indices} customName={customName}/>
            } 
            case 'line': { 
                return <LineCh dataToDisplay={dataToDisplay} indices={indices} customName={customName}/>
             } 
             case 'scatter': { 
                return <ScatterPlot dataToDisplay={dataToDisplay} indices={indices} customName={customName}/>
             } 
            default: { 
                return <BiaxialLineCh dataToDisplay={dataToDisplay} indices={indices} customName={customName}/>
            } 
         } 
    };

    useEffect(() => {
        if (!!data && data.length > 0){
            const from = Math.floor((data.length - Number(step) - 1)*sliderPosition);
            const dataSlice = data?.slice(from, from + Number(step) + 1);

            const latest = data[data.length - 1];
            dispatch(setSummaryStat({
                deceased: latest.deceased,
                infected: latest.infected,
                recovered: latest.recovered,
                tested: latest.tested,
                activeInfected: latest.activeInfected || null
            }));
            
            // transform data to plot daily change
            // we need an array one element longer to be able to subtract a previous value
            const transformedData = calcCustomData(dataSlice, variable1, variable2, operator).slice(1, Number(step) + 1).map((data, inx) => ({
                ...data,
                deceased: data.deceased - dataSlice[inx]['deceased'],
                infected: data.infected - dataSlice[inx]['infected'],
                recovered: data.recovered - dataSlice[inx]['recovered'],
                tested: data.tested - dataSlice[inx]['tested']
            }))
            
            setDataToDisplay(transformedData);
            sliderStep.current = Math.floor(1/(data.length / Number(step))*100)/100 || 0.01;
        }

    }, [data, indices, step, dispatch, sliderPosition, variable1, variable2, operator]);


    return (
        <div className={styles.chartArea} aria-label="display chart">
            {isLoading && <div className={styles.spinnerContainer}><Spinner width={"40px"}/></div>}
            {!!dataToDisplay && dataToDisplay?.length > 0 && <div className={styles.chartAndSlider}>
                { <CurrentChart />}
                {<XAxisSliderControl 
                step={sliderStep.current} 
                start={startDate} 
                end={endDate}/>}
            </div>}
            {!!error && "An error occured, please try again later."}
        </div>
    );
};

export default Chart;