import Itemcard from "./Itemcard";
import tasks from "../assets/data.json";
const List = () => {
  return (
    <>
      <Itemcard tasks={tasks} />
    </>
  );
};
export default List;
