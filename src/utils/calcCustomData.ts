import type { Data } from '../components/Chart/Chart';

const calcNewIndex = (operator: string, var1:number, var2:number) => {
    switch (operator){
        case 'plus': return var1 + var2;
        case 'minus': return var1 - var2;
        case 'divide': return var1/var2;
        case 'multiply': return var1*var2;
        default: return 0;
    }
};


const calcCustomData = (dataToDisplay: Data[], variable1:string, variable2:string, operator:string) => {
    
    console.log("var1", variable1, "var2", variable2, "operator", operator);
    if (variable1 && variable2){
        const customValues = dataToDisplay.map(dataItem => ({
            ...dataItem,
            custom: calcNewIndex(operator, Number(dataItem[variable1]), Number(dataItem[variable2]))
        })); console.log("custom", customValues);
        return customValues;
    }
    return dataToDisplay.map(item => ({...item, custom: 0}));
    
};

export default calcCustomData;