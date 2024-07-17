import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import MainPage from './Pages/MainPage/MainPage';
import AttendanceCheckPage from './Pages/AttendanceCheckPage/AttendanceCheckPage';
import Studentinfo from './Pages/StudentInfo/StudentInfo';
import axios from 'axios';


type StudentType = {
  id: number;
  name: string;
  attendance: boolean;
}

function App() {
  const [students, setStudents] = useState<StudentType[]>([{id:0, name:"", attendance:false}]);
  const [state, setState] = useState([{studenctCnt: 0, attendanceCnt: 0}])

  const List = [
    { id: 1, name: 'John Doe', attendance: true },
    { id: 2, name: 'Jane Smith', attendance: false },
    { id: 3, name: 'Sam Brown', attendance: true },
  ];

  	// 서버에서 받은 데이터를 console로 찍어서 확인한다.
    useEffect(() => {
      axios.get('/api/test')
        .then(res => console.log(res))
        .catch()
    })
  return (
    <div className="App">
        <Layout>
          <Routes>
            <Route path='/' element={<MainPage ListProps={List}/>} />
            <Route path='/attendance' element={<AttendanceCheckPage />} />
            <Route path='/studentinfo' element={<Studentinfo />} />
          </Routes>
        </Layout>
    </div>
  );
}

export default App;
