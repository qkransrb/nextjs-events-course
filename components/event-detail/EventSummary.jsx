import styles from "../../styles/EventSummary.module.css";

export default function EventSummary({ title }) {
  return (
    <section className={styles.summary}>
      <h1>{title}</h1>
    </section>
  );
}
