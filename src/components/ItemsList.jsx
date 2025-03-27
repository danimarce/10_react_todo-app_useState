import { ItemCard } from "./ItemCard";
import styles from "./ItemsList.module.css"

export const ItemsList = ({ itemsList }) => {
  return (
    <ul className={styles["unorderedList__wrapper"]}>
      {itemsList.map((item) => {
        const { uuid } = item;

        return <ItemCard key={uuid} item={item} />;
      })}
    </ul>
  );
};
