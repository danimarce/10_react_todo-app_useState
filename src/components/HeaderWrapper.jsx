import styles from "./HeaderWrapper.module.css";

export const HeaderWrapper = ({ children }) => {
  return <header className={styles["header__wrapper"]}>{children}</header>;
};
