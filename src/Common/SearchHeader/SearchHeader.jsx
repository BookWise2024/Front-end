
import Header from "./Header/HomeHeader.jsx";
import InputField from "./Input/InputField.jsx";

const SearchHeader = ({ onSearch }) => {
  return (
    <>
      <Header />
      <InputField onSearch={onSearch} />
    </>
  );
};

export default SearchHeader;
