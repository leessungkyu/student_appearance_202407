import { Legend, Pie, PieChart, Tooltip } from "recharts"

type StateType = {
    attendanceCnt : number
    absenceCnt : number
}
const AttendanceState = ({absenceCnt, attendanceCnt}:StateType) => {
    const StateData = [
        {name:'출석', value: attendanceCnt, fill: 'red'},
        {name:'미출석', value: absenceCnt, fill: 'blue'}
    ]
    return <div>
        <h1>출석현황</h1>
        <PieChart width={280} height={280}>
        <Legend
          height={110}
          layout="vertical"
          verticalAlign="middle"
          align="right"
          iconSize={7}
          payload={[
            { value: `출석 ${attendanceCnt}%`, type: 'square', color: '#EB6927' },
            { value: `미출석 ${absenceCnt}%`, type: 'square', color: '#2D8CFF' },
          ]}
        />
        <Pie
          data={StateData}
          dataKey="value"
          nameKey="name"
          innerRadius={40}
          outerRadius={80}
          cx={80}
          cy={100}
        />
        <Tooltip />
        </PieChart>
    </div>
}

export default AttendanceState;