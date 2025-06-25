import Itemcard from "./Itemcard";
const List = ({ tasks, handleDeleteTask }) => {
  return <Itemcard tasks={tasks} handleDeleteTask={handleDeleteTask} />;
};
export default List;
