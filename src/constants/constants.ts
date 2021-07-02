export const covidIndices = new Set([
    'infected', 
    'deceased',
    'recovered',
    'quarantined',
    'tested',
    'custom'
]);

export const lineColors = ["#BF1363", "#39A6A3","#000000", "#555555", "#2B807d", "#DEEEEA"];

export type ChartTypesT = {
    area: "Area Chart",
    bar: "Bar Chart",
    line: "Line Chart",
    scatter: "Scatter plot (with 2 variables)",
    [key: string]: string    
}
export const ChartTypes: ChartTypesT = {
    area: "Area Chart",
    bar: "Bar Chart",
    line: "Line Chart",
    scatter: "Scatter plot (with 2 variables)"
};