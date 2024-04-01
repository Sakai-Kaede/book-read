import '../css/MoveForwardButton.css'

type Props = {
  pageNum: number;
  handleValueChange: (pageNum: number) => void;
};

const MoveForwardButton = ({ pageNum,handleValueChange }: Props) => {
  const moveForward = () => {
    handleValueChange(pageNum + 1)
  }
  
  return (
      <button className="moveForward" onClick={moveForward}>⇦</button> 
  );
};

export default MoveForwardButton;