import { FILTER_TYPES } from "../consts";
import Filters from "./Filters";

interface Props {
  filterSelected: FILTER_TYPES;
  activeCount: number;
  completedCount: number;
  todosCount: number;
  onClearCompleted: () => void;
  // eslint-disable-next-line no-unused-vars
  handleFilterChange: (filter: FILTER_TYPES) => void;
  onCreateDummyData: () => void;
}

export default function Footer({
  activeCount,
  completedCount = 0,
  todosCount,
  filterSelected,
  handleFilterChange,
  onClearCompleted,
  onCreateDummyData,
}: Props) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount} Pending tasks </strong>
      </span>

      <Filters filterSelected={filterSelected} onFilterChange={handleFilterChange} />

      {completedCount > 0 && (
        <button className="clear-completed" style={{ color: "red" }} onClick={onClearCompleted}>
          Clear completed
        </button>
      )}

      {todosCount === 0 && (
        <button className="clear-completed" style={{ color: "green" }} onClick={onCreateDummyData}>
          {" "}
          Create dummy data{" "}
        </button>
      )}
    </footer>
  );
}
