import { Header } from "./Header";
import { Subheader } from "./Subheader";
import { ListHeader } from "./ListHeader";
import { ItemsList } from "./ItemsList";
import { ListContainer } from "./ListContainer";
import { HeaderWrapper } from "./HeaderWrapper";
import { TaskForm } from "./TaskForm";
import "./App.css";
import { useTodos } from "../hooks/useTodos";

const App = () => {
  const { todos, handleCreateTask } = useTodos();

  return (
    <>
      <HeaderWrapper>
        <Header />
        <Subheader subtitle="Todo List Manager" />
      </HeaderWrapper>
      <TaskForm onCreateTask={handleCreateTask} />
      <ListContainer>
        <ListHeader content="Todo List" />
        <ItemsList itemsList={todos} />
      </ListContainer>
    </>
  );
};

export default App;
