import React from 'react';

const EmotionItem = ({
  emotion_id,
  emotion_img,
  emotion_descript,
  onClick,
  isSelected,
}) => {
  return (
    <div
      onClick={() => onClick(emotion_id)}
      className={[
        'EmotionItem',
        isSelected ? `EmotionItem_on_${emotion_id}` : `EmotionItem_off`,
      ].join(' ')}
    >
      <img src={emotion_img} alt="감정 이미지" />
      <span>{emotion_descript}</span>
    </div>
  );
};

export default EmotionItem;
