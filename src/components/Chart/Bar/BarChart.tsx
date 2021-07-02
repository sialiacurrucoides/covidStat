import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { format, parseISO } from 'date-fns';
import type { Data } from '../Chart';
import { lineColors } from '../../../constants/constants';

const BarCh: React.FC<{dataToDisplay: Data[] | undefined, indices: string[]}> = ({dataToDisplay, indices}) => {
    

    return (
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
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

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="lastUpdatedAtSource" minTickGap={28} tickFormatter={str => {
            const date = parseISO(str);
            return format(date, "MMM/dd");
          }}/>
          <YAxis />
          <Tooltip />
          <Legend layout="horizontal" verticalAlign="top" align="center"/>
          {indices.map((index, inx) => <Bar 
          key={index} 
          dataKey={index} 
          fill={lineColors[inx]}
           />)}
        </BarChart>
      </ResponsiveContainer>
    );
}

export default BarCh;