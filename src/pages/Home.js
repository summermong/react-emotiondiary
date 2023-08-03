import { useState } from 'react';
import Myheader from '../components/Myheader';
import Mybutton from '../components/Mybtn';

const Home = () => {
  const [curDate, setCurDate] = useState(new Date());
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

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
    </div>
  );
};

export default Home;
