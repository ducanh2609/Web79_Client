import { useSelector } from "react-redux";
import "./homepage.scss";
import TodoList from "../components/TodoList";
import ReactLoading from "react-loading";

function HomePage() {
  const user = useSelector(({ user }) => user);
  const todoList = useSelector((state) => state.todoList);

  return (
    <div>
      {user.token ? (
        <>
          <TodoList />
          {todoList.loading && (
            <ReactLoading delay={2000} height={"20%"} width={"20%"} />
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default HomePage;
