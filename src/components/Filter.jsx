import './Filter.css';

const Filter = ({ selectFilter, setSelectFilter }) => {
  return (
    <div className="select__menu">
      <label>Сортировка по:</label>
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
