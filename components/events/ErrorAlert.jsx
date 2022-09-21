import styles from "../../styles/ErrorAlert.module.css";

export default function ErrorAlert({ children }) {
  return <div className={styles.alert}>{children}</div>;
}
