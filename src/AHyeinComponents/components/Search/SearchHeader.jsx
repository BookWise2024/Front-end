import styles from "./SearchHeader.module.css";
import Header from "../HomeHeader.jsx";
import InputField from "./InputField.jsx";
import Layout from "../Layout/Layout.jsx";

const SearchHeader = () => {
  return (
    <Layout>
      <Header className={styles.container} />
      <InputField />
    </Layout>
  );
};

export default SearchHeader;
