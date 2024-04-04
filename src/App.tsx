import { useState } from "react";
import './App.css';
import Story from './components/Story';
import TableContents from './components/TableContents';
import BookImage from "./components/BookImage";
import MoveForwardButton from "./components/MoveForwardButton";
import MoveBackwardButton from "./components/MoveBackwardButton";

function App() {
  const [pageNum, setPageNum] = useState<number>(1);

  // 直接set関数を渡さずに変更用の関数をpropsへ渡す
  const handleValueChange = (newValue: number) => {
    setPageNum(newValue);
  }

  return(
    <>
      <div className="item">
      <MoveForwardButton pageNum={pageNum} handleValueChange={handleValueChange}></MoveForwardButton>
        <Story pageNum={pageNum} />
        <MoveBackwardButton pageNum={pageNum} handleValueChange={handleValueChange}></MoveBackwardButton>
      </div>
      
      <p className="pageNum">{pageNum}ページ</p>
      <TableContents handleValueChange={handleValueChange} />
      <BookImage></BookImage>
      <img src="../src/assets/Waterfall.jpg" alt="Waterfall" />
    </>
  );
}

export default App