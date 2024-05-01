import './Filter.css';

type FilterProps = {
  selectFilter: string;
  setSelectFilter: (str: string) => void;
};

const Filter: React.FC<FilterProps> = ({ selectFilter, setSelectFilter }) => {
  return (
    <div className="select__menu">
      <label>Filter as</label>
      <select
        onChange={(event) => setSelectFilter(event.target.value)}
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
