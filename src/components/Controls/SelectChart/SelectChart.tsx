import { useState } from 'react';
import SelectInput from '../../UI/SelectInput/SelectInput';

import { useAppDispatch } from '../../../hooks/reduxHooks';
import { setSelectedChartType } from '../../../store/dataSlice';
import { ChartTypes } from '../../../constants/constants';


const SelectChart: React.FC = () => {
    const [chartType, setChartType] = useState(ChartTypes[0].value);
    const dispatch = useAppDispatch();
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      setChartType(event.target.value as string);
      dispatch(setSelectedChartType(event.target.value as string));
    };
    

    return (
        <SelectInput 
        value={chartType}
        handleChange={handleChange} 
        options={ChartTypes} 
        minWidth={240}
        title={"Select chart type"}
        />
    );
};

export default SelectChart;