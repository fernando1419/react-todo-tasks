import { FILTER_TYPES } from "../consts";
import Filters from "./Filters";

interface Props {
  filterSelected: FILTER_TYPES;
  activeCount: number;
  completedCount: number;
  // eslint-disable-next-line no-unused-vars
  handleFilterChange: (filter: FILTER_TYPES) => void;
}

export default function Footer({ activeCount, completedCount = 0, filterSelected, handleFilterChange }: Props) {
  console.log({ completedCount });
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount} Pending tasks </strong>
      </span>

      <Filters filterSelected={filterSelected} onFilterChange={handleFilterChange} />
    </footer>
  );
}
