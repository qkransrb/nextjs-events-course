import Link from "next/link";
import styles from "../../styles/Button.module.css";

export default function Button({ link, children }) {
  if (link) {
    return (
      <Link href={link}>
        <a className={styles.btn}>{children}</a>
      </Link>
    );
  }

  return <button className={styles.btn}>{children}</button>;
}
