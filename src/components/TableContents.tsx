import { TableContentsData } from "./TableContentsData";

type Props = {
  handleValueChange: (pageNum: number) => void;
};

const TableContents = ({ handleValueChange }: Props) => {
  return (
    <div className="TableContents">
      <ul className="TableContentsList">
        {TableContentsData.map((value, key) => (
          <button key={key} className="row" onClick={() => {handleValueChange(value.pageNum);}}>
            {value.title}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default TableContents;