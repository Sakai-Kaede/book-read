type Props = {
  pageNum: number;
  handleValueChange: (pageNum: number) => void;
};

const MoveButton = ({ pageNum,handleValueChange }: Props) => {
  const moveForward = () => {
    handleValueChange(pageNum + 1)
  }
  const moveBackward = () => {
    if(pageNum > 1){
      handleValueChange(pageNum - 1)
    }
  }
  
  return (
    <>
      <button onClick={moveForward}>⇦</button>
      <button onClick={moveBackward}>⇨</button>
    </>
  );
};

export default MoveButton;