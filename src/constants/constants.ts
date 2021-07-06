export const covidIndices = new Set([
    'infected', 
    'deceased',
    'recovered',
    'quarantined',
    'tested',
    'custom'
]);

export const lineColors = ["#BF1363", "#39A6A3","#000000", "#555555", "#2B807d", "#DEEEEA"];

export const ChartTypes = [
    {value: 'biaxialLine', label: 'Biaxial Line Chart'},
    {value: 'area', label: 'Area Chart'},
    {value: 'bar', label: 'Bar Chart'},
    {value: 'line', label: 'Line Chart'},
    {value: 'scatter', label: 'Scatter plot (with 2 variables)'}
];

export const twoVariableNeeded = "Exactly 2 variable (selected indicator) needed.";