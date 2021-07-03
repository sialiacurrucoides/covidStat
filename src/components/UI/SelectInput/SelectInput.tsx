import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import React from 'react';


const SelectInput: React.FC<{
    value: string,
    minWidth: number, 
    handleChange: (event:React.ChangeEvent<{value:unknown}>) => void, 
    options: {
        value: string,
        label: string
    }[],
    title: string
}> = ({value, minWidth, handleChange, options, title}) => {
    const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
        margin: theme.spacing(0),
        marginTop: 16,
        minWidth: minWidth,
        },
        selectEmpty: {
        marginTop: theme.spacing(2),
        },
    }),
    );

    const classes = useStyles();

    return (
        <FormControl className={classes.formControl}>
            <InputLabel style={{color: "#231E23"}} id="customized-select-label">{title}</InputLabel>
            <Select
            labelId="customized-select-label"
            id="customized-select"
            value={value}
            onChange={handleChange}
            style={{width: `${minWidth}px`}}
            >
            {options.map(option => <MenuItem key={option.value} value={option.value}>
                {option.label}
            </MenuItem>)}
            </Select>
        </FormControl>
    );
};

export default SelectInput;