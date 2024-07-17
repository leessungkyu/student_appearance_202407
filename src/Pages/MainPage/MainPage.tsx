import { Link, Navigate } from "react-router-dom";
import AttendanceList from "../../components/AttendanceList/AttendanceList";
import AttendanceState from "../../components/AttendanceState/AttendanceState";
import CalendarApp from "../../components/Calendar/CalendarApp";

type MainType = {
    ListProps: {
        id: number
        name: string
        attendance: boolean
    }[]
}

const MainPage = ({ListProps}:MainType) => {
    return <div>
        <div className="flex">
            <div className="flex flex-col">
                <div className="border">
                    <Link to={'/attendance'}>더보기</Link>
                    <AttendanceState absenceCnt={5} attendanceCnt={5}/>
                </div>
                <div className="border">
                    <Link to={'/studentinfo'}>더보기</Link>
                    <AttendanceList List={ListProps}/>
                </div>
            </div>
            <div className="flex flex-col">
                <div><CalendarApp /></div>
                <div>방후활동</div>
            </div>
        </div>
    </div>
}

export default MainPage;