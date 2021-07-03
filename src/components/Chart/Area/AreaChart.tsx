import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { format, parseISO } from 'date-fns';
import type { Data } from '../Chart';
import { lineColors } from '../../../constants/constants';

const AreaCh: React.FC<{
  dataToDisplay: Data[] | undefined, 
  indices: string[],
  customName: string
}> = ({dataToDisplay, indices, customName}) => {
    

    return (
        <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={300}
          data={dataToDisplay}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
            {lineColors.map((lineColor,inx) => <defs>
                <linearGradient id={`color${inx}`} x1="0" y1="0" x2="0" y2="1" key={`lG${inx}`}>
                <stop offset="5%" stopColor={lineColor} stopOpacity={0.8}/>
                <stop offset="95%" stopColor={lineColor} stopOpacity={0}/>
                </linearGradient>
            </defs>)}
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="lastUpdatedAtSource" minTickGap={28} tickFormatter={str => {
            const date = parseISO(str);
            if (Number.isNaN(date.getTime())) return "??/??";
            return format(date, "MMM/dd");
          }}/>
          <YAxis />
          <Tooltip />
          <Legend layout="horizontal" verticalAlign="top" align="center"/>
          {indices.map((index, inx) => <Area 
          name={index === "custom" ? customName : index}
          key={index} 
          dataKey={index} 
          stroke={lineColors[inx]}
          fillOpacity={1} 
          fill={`url(#color${inx})`}
           />)}
        </AreaChart>
      </ResponsiveContainer>
    );
}

export default AreaCh;