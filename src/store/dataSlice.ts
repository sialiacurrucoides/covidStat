import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { covidIndices } from '../constants/constants';

type DataState = {
    step: string,
    selectedChartType: string,
    selectedIndices: string[]
}

// Define the initial state 
const initialState: DataState = {
  step: '28', // days
  selectedChartType: 'linear',
  selectedIndices: []
}

export const dataSlice = createSlice({
  name: 'data',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<string>) => {
        state.step = action.payload;
    },
    setSelectedChartType: (state, action: PayloadAction<string>) => {
        state.selectedChartType = action.payload;
    },
    addSelectedIndex: (state, action: PayloadAction<string>) => {
        if (covidIndices.has(action.payload)){
            state.selectedIndices = [...state.selectedIndices, action.payload];
        } 
    },
    removeSelectedIndex: (state, action: PayloadAction<string>) => {
        state.selectedIndices = state.selectedIndices.filter(inx => inx !== action.payload);
    }

  },
})

export const { setStep, setSelectedChartType, addSelectedIndex, removeSelectedIndex } = dataSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.data

export default dataSlice.reducer