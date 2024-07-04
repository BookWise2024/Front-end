// <<<<<<< HEAD

// =======
// import React from 'react';
// >>>>>>> 7da3269cee422ec8ad72c4e2b9663cc0939f15fd
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
