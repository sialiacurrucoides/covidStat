import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { Data } from '../Chart';
import { lineColors } from '../../../constants/constants';

const Linear: React.FC<{dataToDisplay: Data[] | undefined, indices: string[]}> = ({dataToDisplay, indices}) => {
    console.log("data", dataToDisplay, "indices", indices);
    return (
        <ResponsiveContainer width="100%" height="100%">
        <LineChart
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
          <XAxis dataKey="lastUpdatedATApify" />
          <YAxis />
          <Tooltip />
          <Legend />
          {indices.map((index, inx) => <Line type="monotone" key={index} dataKey={index} stroke={lineColors[inx]} />)}
        </LineChart>
      </ResponsiveContainer>
    );
}

export default Linear;