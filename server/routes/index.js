const express = require('express');
const router = express.Router();
const db = require('../config/db');
 
// http://localhost:4000/ 으로 접속 시 응답메시지 출력
router.get('/students', (req,res) => {
    db.query('SELECT * FROM STUDENTS', (err, data) => {
        if(!err) res.send({ products : data});
        else res.send(err);
    })
})


router.get('/dayattendance', (req, res) => {
    const sql = `
        SELECT 
            SUM(CASE WHEN ATTENDANCE = 1 THEN 1 ELSE 0 END) AS ATTENDANCE1, 
            SUM(CASE WHEN ATTENDANCE = 0 THEN 1 ELSE 0 END) AS ATTENDANCE2 
        FROM ATTENDANCE 
        WHERE checkdt = ?
    `;
    const params = [req.query.checkdt]; // 파라미터를 배열로 감싸서 전달합니다.
    console.log(params);
    db.query(sql, params, (err, data) => {
        if (!err) {
            res.send({cnt : data});
        } else {
            res.send(err);
        }
    });
});

router.get('/schedule', (req, res) => {
    const sql = `
      SELECT A.SCHEDULEDT, A.SCHEDULETITLE
        FROM (
                SELECT SCHEDULEDT, SCHEDULETITLE
                    FROM SCHEDULE
                ORDER BY SCHEDULEDT DESC, SCHEDULENO DESC
             ) A
             LIMIT 10;
             
    `;
    db.query(sql, (err, data) => {
        if(!err) {res.send({schedule: data});}
        else {res.send(err);}
    })
})

module.exports = router;