import '../css/MoveBackwardButton.css'

type Props = {
  pageNum: number;
  handleValueChange: (pageNum: number) => void;
};

const MoveBackwardButton = ({ pageNum,handleValueChange }: Props) => {
  const moveBackward = () => {
    if(pageNum > 1){
      handleValueChange(pageNum - 1)
    }
  }
  
  return (
    <button className="moveBackward" onClick={moveBackward}>
      <span>⇨</span>
    </button>    
  );
};

export default MoveBackwardButton;