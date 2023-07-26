import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  // 페이지를 이동시키는 함수를 반환함 (navigate는 함수)
  const navigate = useNavigate();

  // setSearchParams는 useState처럼 params를 바꿔줌
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  console.log("id: ", id);

  const mode = searchParams.get("mode");
  console.log("mode: ", mode);

  return (
    <div className="Edit">
      <h2>Edit</h2>
      <p>이 곳은 수정하는 곳입니다.</p>
      <button onClick={() => setSearchParams({ who: "summermong" })}>
        QS 바꾸기
      </button>
      <button
        onClick={() => {
          // 함수 navigate 호출
          // 로그인 안하면 로그인 페이지로 보내줄 때 사용됨
          navigate("/home");
        }}
      >
        집으로...
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로 가기
      </button>
    </div>
  );
};

export default Edit;
