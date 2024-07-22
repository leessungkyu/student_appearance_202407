import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Legend, Pie, PieChart, Tooltip } from "recharts"

// type StateType = {
//     attendanceCnt : number
//     absenceCnt : number
// }
//{absenceCnt, attendanceCnt}:StateType
type StateType = {
  checkdt : string
}

const AttendanceState = ({checkdt}:StateType) => {
    //출석인원
    const [attendanceCnt, setAttendanceCnt] = useState<number>(0);
    //미출석인원
    const [absenceCnt, setAbsenceCnt] = useState<number>(0);
    //로딩여부
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(()=> {
      const fetchData = async () => {
        setLoading(true);
        
        try{
          // '/api/BoardContent' 라는 uri 로 DB를 불러온다.
            const res = await axios.get('/api/dayattendance', {
              // param 으로 idx 값을 넘겨준다.
                params: {
                    'checkdt': checkdt
                }
            })
            setAttendanceCnt(res.data.cnt[0].ATTENDANCE1);
            setAbsenceCnt(res.data.cnt[0].ATTENDANCE2);
        } catch(error) {
            console.error(error)
        } finally {
            setLoading(false);
        }
      }
      fetchData();
    },[checkdt])



    const StateData = [
        {name:'출석', value: attendanceCnt, fill: 'red'},
        {name:'미출석', value: absenceCnt, fill: 'blue'}
    ]
    return <div>
        <h1>출석현황</h1>
        {
          loading ? 
          "로딩중"
          :
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
        }

    </div>
}

export default AttendanceState;