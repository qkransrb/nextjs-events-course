import Image from "next/image";
import AddressIcon from "../icons/AddressIcon";
import DateIcon from "../icons/DateIcon";
import styles from "../../styles/EventLogistics.module.css";
import LogisticsItem from "./LogisticsItem";

export default function EventLogistics({ event }) {
  const { date, location, image, title } = event;

  const humanReadableDate = new Date(date).toLocaleDateString("ko-KR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const addressText = location.replace(", ", "\n");

  return (
    <section className={styles.logistics}>
      <div className={styles.image}>
        <Image
          src={`/${image}`}
          alt={title}
          width={300}
          height={300}
          objectFit="cover"
        />
      </div>
      <ul className={styles.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}
