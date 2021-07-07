import { format, parseISO } from 'date-fns';

const formatTooltip = (label:string | undefined, formatTemplate:string) => {
    try {
        const date = !!label && parseISO(label);
        if (!!date){
            return format(date, formatTemplate);
        }
        return label;
    } catch {
        return label;
    }

};

export default formatTooltip;