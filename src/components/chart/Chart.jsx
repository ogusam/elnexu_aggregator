import { LineChart, Line,Legend, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import "./chart.css"
const Chart = ({data}) => {
  return (
    <div className="container">
        <ResponsiveContainer width="100%" aspect={4 / 2}>
        <LineChart
          width={450}
          height={270}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="withdraw" stroke="#82ca9d" />
          <Legend/>
        </LineChart>
      </ResponsiveContainer>

    </div>
  )
}

export default Chart;