import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col } from 'react-grid-system';

type scheduletype = {
    SCHEDULEDT : string,
    SCHEDULETITLE : string,
}

const Schedule = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [schedule, setSchedule] = useState<scheduletype[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null); // 에러 상태 초기화
            try {
                const res = await axios.get('/api/schedule');
                setSchedule(res.data.schedule); // 전체 배열을 설정
                console.log(res.data.schedule)
            } catch (error) {
                console.error(error);
                setError('데이터를 불러오는 중 오류가 발생했습니다.');
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    return (
        <Container>
            {loading ? (
                <p>로딩 중...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                schedule.map((rowdata, index) => (
                    <Row key={index}>
                        <Col xs={4}>{rowdata.SCHEDULEDT}</Col>
                        <Col xs={6}>{rowdata.SCHEDULETITLE}</Col>
                    </Row>
                ))
            )}
        </Container>
    )
}
export default Schedule;