import "../styles/TodoItem.css";
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
function TodoItem({text, completed, onComplete, onDelete}){

    return (
      <li className="TodoItem">
        <FaCheck
          onClick={() => onComplete(text)}
          className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        />

        <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
          {text}
        </p>
        <RxCross2 onClick={() => onDelete(text)} className="Icon Icon-delete"/>
      </li>
    );
}
export{TodoItem};