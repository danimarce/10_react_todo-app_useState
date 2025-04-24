import styles from "./ItemCard.module.css";

export const ItemCard = ({ item }) => {
  const { title, description, status } = item;

  const titleClass = {
    pending: `${styles["item__title"]} ${styles["item__title--regular"]}`,
    "in progress": `${styles["item__title"]} ${styles["item__title--bold"]}`,
    done: `${styles["item__title"]} ${styles["item__title--strikethrough"]}`,
  };

  const statusClass = {
    pending: `${styles["item__status"]} ${styles["item__status--green"]}`,
    "in progress": `${styles["item__status"]} ${styles["item__status--blue"]}`,
    done: `${styles["item__status"]} ${styles["item__status--grey"]}`,
  };

  return (
    <>
      <li className={styles["item-card__wrapper"]}>
        <h4 className={titleClass[status]}>{title}</h4>
        <p className={styles["item__description"]}>{description}</p>
        <span className={statusClass[status]}>{status}</span>
      </li>
    </>
  );
};
