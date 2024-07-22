import { match } from "assert"
import axios from "axios"
import { useEffect, useState } from "react"

type AttendanceListType = {
        id?: number
}

type dataType = {
    id: number,
    name: string,
    phone: string,
    address: string,
}

const AttendanceList = ({id}:AttendanceListType) => {

        const [inputData, setInputData] = useState<dataType[]>([]);
        
        // 글 리스트의 갯수를 세기 위해 선언, 기본값 0
        const [lastIdx, setLastIdx] = useState(0)

    	// 데이터를 호출해 오는 동안 대기할 수 있도록 async, await 사용
        useEffect(() => {
            const fetchData = async () => {
                try{
                    // 데이터를 받아오는 동안 시간이 소요됨으로 await 로 대기
                    const res = await axios.get('/api/students')
                    // 받아온 데이터로 다음 작업을 진행하기 위해 await 로 대기
                    // 받아온 데이터를 map 해주어 rowData 별로 _inputData 선언
                    const _inputData =  res.data.products.map((rowData:dataType) => (
                        setLastIdx(lastIdx + 1),
                        {
                            id: rowData.id,
                            name: rowData.name,
                            phone: rowData.phone,
                            address: rowData.address,
                        })
                    )

                    // 상태 업데이트
                    setInputData(_inputData);
                    setLastIdx(_inputData.length);
                } catch (error) {
                    // 에러 객체를 전적으로 출력하여 디버깅에 도움을 준다.
                    console.error('An error occurred:', error);
                }
            };

            fetchData();
        },[])

    return (
    <div className="grid col boder">
        {
            lastIdx === 0 ? "Empty"
            :<table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {inputData.map(rowData => (
                        <tr key={rowData.id}>
                            <td>{rowData.name}</td>
                            <td>{rowData.phone}</td>
                            <td>{rowData.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        }
    </div>
    )
}

export default AttendanceList;