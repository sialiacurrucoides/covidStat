export const covidIndices = new Set([
    'infected', 
    'deceased',
    'recovered',
    'quarantined',
    'tested',
    'custom'
]);

export const lineColors = ["#000000", "#BF1363", "#39A6A3", "#555555", "#2B807d", "#DEEEEA"];

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