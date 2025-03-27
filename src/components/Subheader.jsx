import styles from "./Subheader.module.css";

export const Subheader = ({ subtitle }) => {
  return <h2 className={styles["heading__subtitle"]}>{subtitle}</h2>;
};
