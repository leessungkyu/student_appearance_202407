type AttendanceListType = {
    List: {
        id: number
        name: string
        attendance: boolean
    }[]
}
const AttendanceList = ({List}:AttendanceListType) => {

    return (
    <div className="grid col">
        {
           List.map((item) => {
            return(
            <div key={item.id}>
                {item.attendance ?  (
                    item.name + '출석'
                ) : (
                    item.name
                )
                }
            </div>
            )
           })
        }
    </div>
    )
}

export default AttendanceList;