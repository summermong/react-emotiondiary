import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DiaryStateContext } from '../App';
import Myheader from '../components/Myheader';
import { getStringDate } from '../util/date';
import Mybtn from '../components/Mybtn';

const Diary = () => {
  // React에서 제공하는 Hooks는 아님
  // 하지만 별도 라이브러리가 자신의 라이브러리 기능을 편하게 하려고 만든 게 사용자 정의 훅(커스텀 훅)
  const { id } = useParams();
  const diaryList = useContext(DiaryStateContext);
  const navigate = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );

      // 일기가 있으면
      if (targetDiary) {
        setData(targetDiary);
        // 일기가 없으면
      } else {
        alert('없는 일기입니다.');
        navigate('/', { replace: true });
      }

      console.log(targetDiary);
    }
  }, [id, diaryList]);

  if (!data) {
    return <div className="DiaryPage">Loading...</div>;
  } else {
    return (
      <div className="DiaryPage">
        <Myheader
          leftChild={
            <Mybtn text={'< 뒤로 가기'} onClick={() => navigate(-1)} />
          }
          headText={`${getStringDate(new Date(data.date))} 기록`}
          rightChild={
            <Mybtn
              text={'수정하기'}
              onClick={() => navigate(`/edit/${data.id}`)}
            />
          }
        />
      </div>
    );
  }
};

export default Diary;
