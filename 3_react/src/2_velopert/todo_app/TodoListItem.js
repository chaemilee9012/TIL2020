import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
  const { id, text, checked } = todo;
  return (
    <div
      className="TodoListItem-virtualized"
      style={style}
    >
      <div className="TodoListItem">
        <div
          className={cn('checkbox', { checked })} // 클래스네임 라이브러리 활용
          onClick={() => onToggle(id)}
        >
        {/* done 값에 따라 달라짐 */}
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className="text">{text}</div>
        </div>
        <div
          className="remove"
          onClick={() => onRemove(id)}
        >
          <MdRemoveCircleOutline />
        </div>
      </div>
    </div>
  );
};

export default React.memo(
  TodoListItem,
  (prevProps, nextProps) => prevProps.todo === nextProps.todo,
);