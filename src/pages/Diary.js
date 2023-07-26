import React from "react";
import { useParams } from "react-router-dom";

const Diary = () => {
  // React에서 제공하는 Hooks는 아님
  // 하지만 별도 라이브러리가 자신의 라이브러리 기능을 편하게 하려고 만든 게 사용자 정의 훅(커스텀 훅)
  const { id } = useParams();
  console.log(id);

  return (
    <div className="Diary">
      <h2>Diary</h2>
      <p>이 곳은 일기 상세 페이지입니다.</p>
    </div>
  );
};

export default Diary;
