import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { Data } from '../Chart';
import { lineColors } from '../../../constants/constants';
import formatTooltip from '../../../utils/formatTooltip';
import { twoVariableNeeded } from '../../../constants/constants';
import formatAxisDate from '../../../utils/formatAxisDate';
import styles from '../Chart.module.scss';

const BiaxialLineCh: React.FC<{
  dataToDisplay: Data[] | undefined, 
  indices: string[],
  customName: string
}> = ({dataToDisplay, indices, customName}) => {
    
    if (indices.length !== 2) return <p className={styles.instruction}>{twoVariableNeeded}</p>;

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
            return formatAxisDate(str);
          }}/>
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip labelFormatter={formatTooltip}/>
          <Line yAxisId="left" name={indices[0] === 'custom' ? customName : indices[0]} type="monotone" dataKey={indices[0]} stroke={lineColors[0]} />
          <Line yAxisId="right" name={indices[1] === 'custom' ? customName : indices[1]}  type="monotone" dataKey={indices[1]} stroke={lineColors[1]} />
          <Legend layout="horizontal" verticalAlign="top" align="center"/>
        </LineChart>
      </ResponsiveContainer>
    );
}

export default BiaxialLineCh;