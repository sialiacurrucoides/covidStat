import { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { useAppDispatch } from '../../../hooks/reduxHooks';
import { setSelectedChartType } from '../../../store/dataSlice';
import { ChartTypes } from '../../../constants/constants';

const chartTypes: string[] = Object.keys(ChartTypes);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(0),
      minWidth: 240,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

const SelectChart: React.FC = () => {

    const classes = useStyles();
    const [chartType, setChartType] = useState('');
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      setChartType(event.target.value as string);
      dispatch(setSelectedChartType(event.target.value as string));
    };
    const dispatch = useAppDispatch();

    return (
        <FormControl className={classes.formControl}>
            <InputLabel style={{color: "#231E23"}} id="customized-select-label">Select chart type</InputLabel>
            <Select
            labelId="customized-select-label"
            id="customized-select"
            value={chartType}
            onChange={handleChange}
            style={{width: "240px"}}
            >
            {chartTypes.map(chart => <MenuItem key={chart} value={chart}>
                {ChartTypes[chart]}
            </MenuItem>)}
            </Select>
        </FormControl>
    );
};

export default SelectChart;