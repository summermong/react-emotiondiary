import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Myheader from '../components/Myheader';
import Mybtn from './../components/Mybtn';

//ISO 형식의 문자열 반환
const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
};

const New = () => {
  // 오늘의 날짜를 ISO 형식으로 바꾼 문자열이 날짜의 초기값이 되도록
  const [date, setDate] = useState(getStringDate(new Date()));
  const navigate = useNavigate();
  return (
    <div>
      <Myheader
        headText={'새 일기 쓰기'}
        leftChild={<Mybtn onClick={() => navigate(-1)} text={'< 뒤로 가기'} />}
      />
      <div>
        <section>
          <h4>오늘의 날짜</h4>
          <div className="input-box">
            <input
              className="input-date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default New;
