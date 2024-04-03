import { useState } from 'react';
import { TableContentsData } from "./TableContentsData";
import '../css/TableContents.css'

type Props = {
  handleValueChange: (pageNum: number) => void;
};

const TableContents = ({ handleValueChange }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openChange = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div  className={isOpen ? "open" : ""}>
        <nav>
          <div className="TableContents">
            <ul>
              {TableContentsData.map((value, key) => (
                <li key={key} className="row">
                  <button className="button" onClick={() => {handleValueChange(value.pageNum);}}>
                    {value.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="toggle-btn" onClick={openChange}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="toggle-btn-background"></div>

        <div className="mask" onClick={openChange}></div>
      </div>
    </>
  );
};

export default TableContents;