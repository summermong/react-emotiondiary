import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DiaryDispatchContext } from './../App.js';
import Myheader from './Myheader';
import Mybtn from './Mybtn';
import EmotionItem from './EmotionItem';

import { emotionList } from '../util/emotion.js';
import { getStringDate } from '../util/date.js';

const DiaryEditor = ({ isEdit, originData }) => {
  const [content, setContent] = useState('');
  const contentRef = useRef();

  const { onCreate, onEdit } = useContext(DiaryDispatchContext);

  const handleSubmit = () => {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }

    if (
      window.confirm(
        isEdit ? '일기를 수정하시겠습니까?' : '새로운 일기를 작성하시겠습니까?'
      )
    ) {
      if (!isEdit) {
        onCreate(date, content, emotion);
      } else {
        onEdit(originData.id, date, emotion, content);
      }
    }
    navigate('/', { replace: true }); // 다시 못 돌아오게
  };

  useEffect(() => {
    if (isEdit) {
      setDate(getStringDate(new Date(parseInt(originData.date))));
      setEmotion(originData.emotion);
      setContent(originData.content);
    }
  }, [isEdit, originData]);

  const [emotion, setEmotion] = useState(3);

  const handleClickEmote = (emotion) => {
    setEmotion(emotion);
  };

  // 오늘의 날짜를 ISO 형식으로 바꾼 문자열이 날짜의 초기값이 되도록
  const [date, setDate] = useState(getStringDate(new Date()));
  const navigate = useNavigate();

  return (
    <div className="DiaryEditor">
      <Myheader
        headText={isEdit ? '일기 수정하기' : '새 일기 쓰기'}
        leftChild={<Mybtn onClick={() => navigate(-1)} text={'< 뒤로 가기'} />}
      />
      <div>
        <section>
          <h4>오늘의 날짜</h4>
          <div className="input_box">
            <input
              className="input_date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
            />
          </div>
        </section>
        <section>
          <h4>오늘의 감정</h4>
          <div className="input_box emotion_list_wrapper">
            {emotionList.map((it) => (
              <EmotionItem
                key={it.emotion_id}
                {...it}
                onClick={handleClickEmote}
                isSelected={it.emotion_id === emotion}
              />
            ))}
          </div>
        </section>
        <section>
          <h4>오늘의 일기</h4>
          <div className="input_box text_wrapper">
            <textarea
              placeholder="오늘은 어땠나요?"
              ref={contentRef}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </section>
        <section>
          <div className="control_box">
            <Mybtn text={'취소하기'} onClick={() => navigate(-1)} />
            <Mybtn
              text={'작성 완료'}
              type={'positive'}
              onClick={handleSubmit}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DiaryEditor;
