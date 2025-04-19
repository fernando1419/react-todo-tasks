import { FILTER_TYPES, FILTERS_BUTTONS } from "../consts";

interface Props {
  filterSelected: FILTER_TYPES;

  // eslint-disable-next-line no-unused-vars
  onFilterChange: (filter: FILTER_TYPES) => void;
}

export default function Filters({ filterSelected, onFilterChange }: Props) {
  return (
    <ul className="filters">
      {Object.entries(FILTERS_BUTTONS).map(([key, { literal, href }]) => {
        const className = key === filterSelected ? "selected" : "";
        // console.log({ key, literal, href, filterSelected, className });
        return (
          <li key={key}>
            <a
              href={href}
              className={className}
              onClick={(event) => {
                event.preventDefault();
                onFilterChange(key as FILTER_TYPES);
              }}
            >
              {" "}
              {literal}{" "}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
