import { useState } from 'react';
import { TableContentsData } from "./TableContentsData";
import '../css/TableContents.css'

type Props = {
  handleValueChange: (pageNum: number) => void;
};

const TableContents = ({ handleValueChange }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className={isOpen ? "open" : ""}>
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

      <div className="toggle-btn" onClick={toggleNav}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
};

export default TableContents;