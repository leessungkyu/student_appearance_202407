import AttendanceList from "../../components/AttendanceList/AttendanceList";
import AttendanceState from "../../components/AttendanceState/AttendanceState";

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
                <div><AttendanceState absenceCnt={5} attendanceCnt={5}/></div>
                <div><AttendanceList List={ListProps}/></div>
            </div>
            <div className="flex flex-col">
                <div>학사일정</div>
                <div>방후활동</div>
            </div>
        </div>
    </div>
}

export default MainPage;