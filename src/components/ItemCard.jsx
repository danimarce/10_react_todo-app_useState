import styles from "./ItemCard.module.css"

export const ItemCard = ({ item }) => {
  const { title, description, status } = item;

  const titleClass =
    status === "done"
      ? `${styles["item__title"]} ${styles["item__title--strikethrough"]}`
      : status === "in progress"
      ? `${styles["item__title"]} ${styles["item__title--bold"]}`
      : status === "pending"
      ? `${styles["item__title"]} ${styles["item__title--regular"]}`
      : "";

  const statusClass =
    status === "done"
      ? `${styles["item__status"]} ${styles["item__status--green"]}`
      : status === "in progress"
      ? `${styles["item__status"]} ${styles["item__status--blue"]}`
      : status === "pending"
      ? `${styles["item__status"]} ${styles["item__status--grey"]}`
      : "";


  return (
    <>
      <li className={styles["itemCard__wrapper"]}>
        <h4 className={titleClass}>{title}</h4>
        <p className={styles["item__description"]}>{description}</p>
        <span className={statusClass}>{status}</span>
      </li>
    </>
  );
};
