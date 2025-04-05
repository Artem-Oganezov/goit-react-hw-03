import s from './SearchBox.module.css';

const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={s.search}>
      <p>Find contacts by name</p>
      <input
        className={s.input}
        value={value}
        onChange={e => onFilter(e.target.value)}
        type="text"
      />
    </div>
  );
};

export default SearchBox;
