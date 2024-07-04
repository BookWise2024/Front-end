// import Header from "./Header/HomeHeader.jsx";
// import InputField from "./Input/InputField.jsx";

// const SearchHeader = () => {
//   return (
//       <>
//       <Header/>
//       <InputField />
//       </>
//   );
// };

// export default SearchHeader;


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
