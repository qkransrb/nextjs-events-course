import EventItem from "./EventItem";
import styles from "../../styles/EventList.module.css";

export default function EventList({ items }) {
  return (
    <ul className={styles.list}>
      {items.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
}
