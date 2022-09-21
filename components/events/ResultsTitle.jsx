import Button from "../ui/Button";
import styles from "../../styles/ResultsTitle.module.css";

export default function ResultsTitle({ date }) {
  const humanReadableDate = new Date(date).toLocaleDateString("ko-KR", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className={styles.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button link="/events">Show all events</Button>
    </section>
  );
}
