import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { Data } from '../Chart';
import { lineColors } from '../../../constants/constants';
import formatTooltip from '../../../utils/formatTooltip';
import formatAxisDate from '../../../utils/formatAxisDate';

const BarCh: React.FC<{
  dataToDisplay: Data[] | undefined, 
  indices: string[],
  customName: string
}> = ({dataToDisplay, indices, customName}) => {
    
    return (
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
          height={300}
          data={dataToDisplay}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="lastUpdatedAtSource" minTickGap={28} tickFormatter={str => {
            return formatAxisDate(str);
          }}/>
          <YAxis />
          <Tooltip labelFormatter={formatTooltip}/>
          <Legend layout="horizontal" verticalAlign="top" align="center"/>
          {indices.map((index, inx) => <Bar 
          name={index === 'custom' ? customName : index}
          key={index} 
          dataKey={index} 
          fill={lineColors[inx]}
           />)}
        </BarChart>
      </ResponsiveContainer>
    );
}

export default BarCh;