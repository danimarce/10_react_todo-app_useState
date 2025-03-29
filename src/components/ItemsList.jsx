import { ItemCard } from "./ItemCard";
import styles from "./ItemsList.module.css"

export const ItemsList = ({ itemsList }) => {
  if (itemsList.length === 0) {
    return <h3 className={styles["third-heading__text"]}>Empty list</h3>
  }

  return (
    <ul className={styles["unorderedList__wrapper"]}>
      {itemsList.map((item) => {
        const { id } = item;

        return <ItemCard key={id} item={item} />;
      })}
    </ul>
  );
};
