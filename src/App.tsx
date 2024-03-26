import { useState } from "react";
import './App.css';
import MoveButton from './components/MoveButton';
import Story from './components/Story';
import TableContents from './components/TableContents';

function App() {
  const [pageNum, setPageNum] = useState<number>(1);

  // 直接set関数を渡さずに変更用の関数をpropsへ渡す
  const handleValueChange = (newValue: number) => {
    setPageNum(newValue);
  }

  return(
    <>
      <MoveButton pageNum={pageNum} handleValueChange={handleValueChange}></MoveButton>
      <p>{pageNum}</p>
      <Story pageNum={pageNum} />
      <TableContents handleValueChange={handleValueChange} />
    </>
  );
}

export default App