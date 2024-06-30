import styles from "./SearchHeader.module.css";
import Header from "./HomeHeader.jsx";
import InputField from "../Input/InputField.jsx";


const SearchHeader = () => {
  return (
      <>
      <Header className={styles.container} />
      <InputField />
      </>
  );
};

export default SearchHeader;
