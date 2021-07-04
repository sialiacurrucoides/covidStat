import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { format, parseISO } from 'date-fns';
import type { Data } from '../Chart';
import { lineColors } from '../../../constants/constants';

const BiaxialLineCh: React.FC<{
  dataToDisplay: Data[] | undefined, 
  indices: string[],
  customName: string
}> = ({dataToDisplay, indices, customName}) => {
    
    if (indices.length !== 2) return <p>Exactly 2 variable (selected indicator) needed</p>;

    return (
        <ResponsiveContainer width="100%" height="100%">
        <LineChart
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
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Line yAxisId="left" name={indices[0] === 'custom' ? customName : indices[0]} type="monotone" dataKey={indices[0]} stroke={lineColors[0]} />
          <Line yAxisId="right" name={indices[1] === 'custom' ? customName : indices[1]}  type="monotone" dataKey={indices[1]} stroke={lineColors[1]} />
          <Legend layout="horizontal" verticalAlign="top" align="center"/>
        </LineChart>
      </ResponsiveContainer>
    );
}

export default BiaxialLineCh;