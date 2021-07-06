import { format, parseISO } from 'date-fns';

const formatAxisDate = (label:string) => {
    try {
        const date = parseISO(label);
        return format(date, "MMM/dd");
    } catch {
        return "??/??";
    }

};

export default formatAxisDate;