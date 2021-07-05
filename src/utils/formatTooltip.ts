import { format, parseISO } from 'date-fns';

const formatTooltip = (label:string) => {
    try {
        const date = parseISO(label);
        return format(date, "yyyy-MMM-dd");
    } catch {
        return label;
    }

};

export default formatTooltip;