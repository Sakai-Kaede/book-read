import { TableContentsData } from "./TableContentsData";
import '../css/TableContents.css'

type Props = {
  handleValueChange: (pageNum: number) => void;
};

const TableContents = ({ handleValueChange }: Props) => {
  return (
    <div className="TableContents">
      <ul>
        {TableContentsData.map((value, key) => (
          <li>
            <button key={key} className="row" onClick={() => {handleValueChange(value.pageNum);}}>
              {value.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableContents;