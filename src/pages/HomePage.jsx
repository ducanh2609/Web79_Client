import { useSelector } from "react-redux";
import "./homepage.scss";
import TodoList from "../components/TodoList";
import Chat from "../components/Chat";
// import ReactLoading from "react-loading";

function HomePage() {
  const user = useSelector(({ user }) => user);
  const modePage = useSelector(({ modePage }) => modePage);
  // const todoList = useSelector((state) => state.todoList);

  return (
    <div>
      {user.token ? (
        <>
          {modePage === "todo" ? <TodoList /> : <Chat />}
          {/* {todoList.loading && (
            <ReactLoading delay={2000} height={"20%"} width={"20%"} />
          )} */}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default HomePage;
