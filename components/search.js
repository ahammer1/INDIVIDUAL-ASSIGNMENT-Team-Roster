import PropTypes from 'prop-types';

export default function Search({ searchInput, setSearchInput }) {
  const handleChange = (e) => {
    setSearchInput(e.target.value.toLowerCase());
  };

  return (
    <>
      <input type="text" placeholder="Search" onChange={handleChange} value={searchInput} />
    </>
  );
}

Search.propTypes = {
  searchInput: PropTypes.string,
  setSearchInput: PropTypes.string,
};

Search.defaultProps = {
  searchInput: '',
  setSearchInput: '',
};
