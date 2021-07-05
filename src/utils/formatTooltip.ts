import { format, parseISO } from 'date-fns';

const formatTooltip = (label:string) => {
    try {
        const date = parseISO(label);
        return format(date, "yyyy-MMM-dd");
    } catch {
        return label;
    }

};
// const formatTooltip = (value:number, name:string) => {
//     try {
//         const date = parseISO(name);
//         return [value, format(date, "yyyy-MMM-dd")]
//     } catch {
//         return [value, name];
//     }

// };

export default formatTooltip;