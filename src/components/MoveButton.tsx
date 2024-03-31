import '../css/MoveButton.css'

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
      <div className="MoveButton">
        <button className="moveForward" onClick={moveForward}>⇦</button>
        <button className="moveBackward" onClick={moveBackward}>⇨</button>
      </div>
    </>
  );
};

export default MoveButton;