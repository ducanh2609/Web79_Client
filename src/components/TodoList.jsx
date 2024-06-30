import { useEffect, useRef, useState } from "react";
import "./todo-list.scss";
import { useDispatch, useSelector } from "react-redux";
import { todoMode, todoSlice } from "../redux/reducers/todoSlice";

function TodoList() {
  const dispatch = useDispatch();
  const [itemEdit, setItemEdit] = useState({});
  const todoList = useSelector((state) => state.todoList);
  const isAddTodo = useSelector((state) => state.modeTodo) === "add";
  console.log("isAddTodo", isAddTodo);
  console.log(todoList);
  const value = useRef();
  const handleAdd = () => {
    if (!value.current.value) {
      return;
    }
    if (isAddTodo) {
      const data = {
        id: `todo-${new Date().valueOf()}`,
        title: value.current.value,
        checked: 0,
      };
      dispatch(todoSlice.actions.create(data));
      value.current.value = "";
    } else {
      const data = {
        ...itemEdit,
        title: value.current.value,
      };
      dispatch(todoSlice.actions.update(data));
      dispatch(todoMode.actions.setModeTodo("add"));
    }
  };
  const handleDelete = (id) => {
    dispatch(todoSlice.actions.delete(id));
  };
  const hanleEdit = (todo) => {
    value.current.value = todo.title;
    dispatch(todoMode.actions.setModeTodo("edit"));
    setItemEdit(todo);
  };
  const handleChange = (e, item) => {
    const data = {
      ...item,
      checked: +e.target.checked,
    };
    dispatch(todoSlice.actions.update(data));
  };
  return (
    <div className="todo-box">
      <h1>TODO LIST</h1>
      <div className="todo-form">
        <input ref={value} type="text" />
        <button className="add" onClick={() => handleAdd()}>
          {isAddTodo ? "Add" : "Submit"}
        </button>
      </div>
      <div className="todo-list">
        {todoList.map((item) => (
          <div className="todo-item" key={item.id}>
            <input
              type="checkbox"
              defaultChecked={item.checked}
              onChange={(e) => handleChange(e, item)}
            />
            <div className="title">{item.title}</div>
            <div className="todo-btn">
              <button className="edit" onClick={() => hanleEdit(item)}>
                Edit
              </button>
              <button className="delete" onClick={() => handleDelete(item.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
