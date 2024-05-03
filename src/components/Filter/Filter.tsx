import { FilterOption } from '../../types/FilterOption';
import './Filter.css';

type FilterProps = {
  selectFilter: FilterOption;
  setSelectFilter: (str: FilterOption) => void;
};

const Filter: React.FC<FilterProps> = ({ selectFilter, setSelectFilter }) => {
  return (
    <div className="select__menu">
      <label>Filter as</label>
      <select
        onChange={(event) =>
          setSelectFilter(event.target.value as FilterOption)
        }
        value={selectFilter}
      >
        <option value="all">все</option>
        <option value="completed">выполнению</option>
        <option value="uncompleted">невыполнению</option>
      </select>
    </div>
  );
};

export default Filter;
