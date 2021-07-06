import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { Data } from '../Chart';
import { lineColors } from '../../../constants/constants';
import formatTooltip from '../../../utils/formatTooltip';
import formatAxisDate from '../../../utils/formatAxisDate';

const AreaCh: React.FC<{
  dataToDisplay: Data[] | undefined, 
  indices: string[],
  customName: string
}> = ({dataToDisplay, indices, customName}) => {
    

    return (
        <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          height={300}
          data={dataToDisplay}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
            {lineColors.map((lineColor,inx) => <defs key={`lG${inx}`}>
                <linearGradient id={`color${inx}`} x1="0" y1="0" x2="0" y2="1" >
                <stop offset="5%" stopColor={lineColor} stopOpacity={0.8}/>
                <stop offset="95%" stopColor={lineColor} stopOpacity={0}/>
                </linearGradient>
            </defs>)}
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="lastUpdatedAtSource" minTickGap={28} tickFormatter={str => {
            return formatAxisDate(str);
          }}/>
          <YAxis />
          <Tooltip labelFormatter={formatTooltip}/>
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