import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { covidIndices } from '../constants/constants';

type SummaryStat = {
  deceased: number | null,
  infected: number | null,
  recovered: number | null,
  tested: number | null,
  activeInfected: number | null
}

type DataState = {
    step: string,
    selectedChartType: string,
    selectedIndices: string[],
    sliderPosition: number,
    summaryStat: SummaryStat
}

// Define the initial state 
const initialState: DataState = {
  step: '14', // days
  selectedChartType: 'area',
  selectedIndices: [],
  sliderPosition: 1,
  summaryStat: {
    deceased: null,
    infected: null,
    recovered: null,
    tested: null,
    activeInfected: null
  }
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
    setSliderPosition: (state, action: PayloadAction<number>) => {
        state.sliderPosition = action.payload;
    },
    setSummaryStat: (state, action: PayloadAction<SummaryStat>) => {
      state.summaryStat = action.payload
    },
    addSelectedIndex: (state, action: PayloadAction<string>) => {
        if (covidIndices.has(action.payload) && !state.selectedIndices.includes(action.payload)){
          state.selectedIndices = [...state.selectedIndices, action.payload];
        } 
    },
    removeSelectedIndex: (state, action: PayloadAction<string>) => {
      state.selectedIndices = state.selectedIndices.filter(inx => inx !== action.payload);
    }

  },
})

export const { setStep, setSelectedChartType, setSliderPosition, setSummaryStat, addSelectedIndex, removeSelectedIndex } = dataSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.data

export default dataSlice.reducer