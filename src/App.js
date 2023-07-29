import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import New from "./pages/New";

// Components
import Mybtn from "./components/Mybtn";
import Myheader from "./components/Myheader";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Myheader
          headText={"App"}
          leftChild={
            <Mybtn text={"왼쪽 버튼"} onClick={() => alert("왼쪽 클릭")} />
          }
          rightChild={
            <Mybtn text={"오른쪽 버튼"} onClick={() => alert("오른쪽 클릭")} />
          }
        />
        <h2>App.js</h2>
        <Mybtn
          text={"버튼"}
          onClick={() => alert("버튼 클릭")}
          type={"positive"}
        />
        <Mybtn
          text={"버튼"}
          onClick={() => alert("버튼 클릭")}
          type={"negative"}
        />
        <Mybtn text={"버튼"} onClick={() => alert("버튼 클릭")} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/diary/:id" element={<Diary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
