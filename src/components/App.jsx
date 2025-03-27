import { Header } from "./Header";
import { Subheader } from "./Subheader";
import { ListHeader } from "./ListHeader";
import { ItemsList } from "./ItemsList";
import { ListContainer } from "./ListContainer";
import { HeaderWrapper } from "./HeaderWrapper";
import "./App.css";

const itemsList = [
  {
    uuid: "1a2b3c4d",
    title: "Task 1",
    description: "Description of task 1",
    status: "pending",
  },
  {
    uuid: "2b3c4d5e",
    title: "Task 2",
    description: "Description of task 2",
    status: "done",
  },
  {
    uuid: "3c4d5e6f",
    title: "Task 3",
    description: "Description of task 3",
    status: "in progress",
  },
  {
    uuid: "4d5e6f7g",
    title: "Task 4",
    description: "Description of task 4",
    status: "pending",
  },
  {
    uuid: "5e6f7g8h",
    title: "Task 5",
    description: "Description of task 5",
    status: "done",
  },
  {
    uuid: "6f7g8h9i",
    title: "Task 6",
    description: "Description of task 6",
    status: "in progress",
  },
  {
    uuid: "7g8h9i0j",
    title: "Task 7",
    description: "Description of task 7",
    status: "pending",
  },
  {
    uuid: "8h9i0j1k",
    title: "Task 8",
    description: "Description of task 8",
    status: "done",
  },
  {
    uuid: "9i0j1k2l",
    title: "Task 9",
    description: "Description of task 9",
    status: "in progress",
  },
  {
    uuid: "0j1k2l3m",
    title: "Task 10",
    description: "Description of task 10",
    status: "pending",
  },
];

const App = () => {
  return (
    <>
      <HeaderWrapper>
        <Header />
        <Subheader subtitle="Todo List Manager" />
      </HeaderWrapper>
      <ListContainer>
        <ListHeader content="Todo List" />
        <ItemsList itemsList={itemsList} />
      </ListContainer>
    </>
  );
};

export default App;
