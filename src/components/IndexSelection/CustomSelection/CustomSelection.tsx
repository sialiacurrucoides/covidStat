import { useState } from 'react';
import styles from './CustomSelection.module.scss';
import Modal from '../../UI/Modal/Modal';
import SelectInput from '../../UI/SelectInput/SelectInput';
import Button from '@material-ui/core/Button';
import { covidIndices } from '../../../constants/constants';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { setCustomParams } from '../../../store/dataSlice';

const CustomSelection:React.FC<{onClose: () => void}> = ({onClose}) => {
    const [variable1, setVariable1] = useState('');
    const [variable2, setVariable2] = useState('');
    const [operator, setOperator] = useState('');
    const dispatch = useAppDispatch();

    const handleChangeVar1 = (event: React.ChangeEvent<{value: unknown}>) => {
        setVariable1(event.target.value as string);
    };

    const handleChangeVar2 = (event: React.ChangeEvent<{value: unknown}>) => {
        setVariable2(event.target.value as string);
    };

    const handleChangeOperator = (event: React.ChangeEvent<{value: unknown}>) => {
        setOperator(event.target.value as string);
    };

    const handleSubmit = () => {
        dispatch(setCustomParams({
            variable1,
            variable2,
            operator
        }));
        onClose();
    };

    const options = Array.from(covidIndices).map(index => ({
        value: index,
        label: index.charAt(0).toUpperCase() + index.slice(1)
    }));

    const operatorOptions = [
        {value: 'plus', label: '+'},
        {value: 'minus', label: '-'},
        {value: 'divided by', label: '/'},
        {value: 'multiplied by', label: '*'}
    ];


    return (
        <Modal onClose={onClose} >
            <div className={styles.formContainer} aria-label="modal content">
            <h3 className={styles.instruction}>Select variables and an operation to create a new indicator</h3>
            <SelectInput
                value={variable1}
                handleChange={handleChangeVar1} 
                options={options} 
                minWidth={200}
                title={"Variable 1"}
                />
            <SelectInput
                value={operator}
                handleChange={handleChangeOperator} 
                options={operatorOptions} 
                minWidth={200}
                title={"operation"}
             />
            <SelectInput
                value={variable2}
                handleChange={handleChangeVar2} 
                options={options} 
                minWidth={200}
                title={"variable 2"}
                />
            <Button variant="contained" onClick={handleSubmit}>Show the derived index</Button>
            </div>
        </Modal>
    );
};

export default CustomSelection;