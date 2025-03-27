import styles from './TaskForm.module.css';

export const TaskForm = () => {
  return (
    <form className={styles["form__wrapper"]}>
      <label htmlFor="title" className={styles["label__wrapper"]}>
        Title
        <input type="text" name="title" id="title" required />
      </label>
      <label htmlFor="description" className={styles["label__wrapper"]}>
        Description
        <textarea name="description" id="description" required></textarea>
      </label>
      <label htmlFor="status" className={styles["label__wrapper"]}>
        Status
        <select name="status" id="status" defaultValue="pending">
          <option value="pending">Pending</option>
          <option value="in-progress">In progress</option>
          <option value="done">Done</option>
        </select>
      </label>
      <input type="submit" value="Create task" />
    </form>
  );
};
