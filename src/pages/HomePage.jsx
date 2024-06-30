import { useSelector } from "react-redux";
import "./homepage.scss";
import TodoList from "../components/TodoList";

function HomePage() {
  const user = useSelector(({ user }) => user);
  return <div>{user.token ? <TodoList /> : <></>}</div>;
}

export default HomePage;
