import styles from "../../styles/EventContent.module.css";

export default function EventContent({ children }) {
  return <section className={styles.content}>{children}</section>;
}
