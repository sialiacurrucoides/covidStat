import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { Data } from '../Chart';
import { lineColors } from '../../../constants/constants';
import sortByIndicator from '../../../utils/sortByIndicator';
import { twoVariableNeeded } from '../../../constants/constants';

const ScatterPlot: React.FC<{
  dataToDisplay: Data[] | undefined, 
  indices: string[],
  customName: string
}> = ({dataToDisplay, indices, customName}) => {
    
    if (indices.length !== 2) return <p>{twoVariableNeeded}</p>;

    return (
        <ResponsiveContainer width="100%" height="100%">
        <ScatterChart
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
          <XAxis dataKey={indices[0]} name={indices[0]}/>
          <YAxis dataKey={indices[1]} name={indices[1]}/>
          <Tooltip />
          <Legend layout="horizontal" verticalAlign="top" align="center"/>
            <Scatter 
            name={`${indices[0] === 'custom' ? customName : indices[0]} and ${indices[1] === 'custom' ? customName :indices[1]}`} 
            data={sortByIndicator(dataToDisplay, indices[0])}
            fill={lineColors[0]}
            />
            <Scatter />
        </ScatterChart>
      </ResponsiveContainer>
    );
}

export default ScatterPlot;