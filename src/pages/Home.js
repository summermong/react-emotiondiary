import { useContext, useEffect, useState } from 'react';
import Myheader from '../components/Myheader';
import Mybutton from '../components/Mybtn';
import DiaryList from '../components/DiaryList';
import { DiaryStateContext } from '../App';

const Home = () => {
  const diaryList = useContext(DiaryStateContext);
  const [data, setData] = useState([]);

  const [curDate, setCurDate] = useState(new Date());
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  // 새로운 일기가 추가/삭제되어도 해당 월에 맞는 일기만 나오도록
  useEffect(() => {
    if (diaryList.length >= 1) {
      const firstDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth(),
        1
      ).getTime();

      const lastDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth() + 1,
        0
      ).getTime();

      setData(
        diaryList.filter((it) => firstDay <= it.date && it.date <= lastDay)
      );
    }
  }, [diaryList, curDate]);

  // 버튼 클릭 시 월 증감
  const increaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
    );
  };

  const decreaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    );
  };

  return (
    <div>
      <Myheader
        headText={headText}
        leftChild={<Mybutton text={'<'} onClick={decreaseMonth} />}
        rightChild={<Mybutton text={'>'} onClick={increaseMonth} />}
      />
      <DiaryList diaryList={data} />
    </div>
  );
};

export default Home;
