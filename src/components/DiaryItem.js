import React from 'react';
import Mybtn from './Mybtn';
import { useNavigate } from 'react-router-dom';

const DiaryItem = ({ id, emotion, content, date }) => {
  const strDate = new Date(parseInt(date)).toLocaleDateString();
  const navigate = useNavigate();

  const goDetail = () => {
    navigate(`/diary/${id}`);
  };

  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="DiaryItem">
      <div
        className={[
          'emotion_img_wrapper',
          `emotion_img_wrapper_${emotion}`,
        ].join(' ')}
        onClick={goDetail}
      >
        <img
          src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`}
          alt="감정"
        />
      </div>
      <div className="info_wrapper" onClick={goDetail}>
        <div className="diary_date">{strDate}</div>
        <div className="diary_content_preview">{content.slice(0, 26)}</div>
      </div>
      <div className="but_wrapper" onClick={goEdit}>
        <Mybtn text={'수정하기'} />
      </div>
    </div>
  );
};

export default DiaryItem;
