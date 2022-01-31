import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Card.module.css";

export default function Card({ image, title, author, publisher, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.card_top}>
        <div className={styles.card_image}>
          <Image
            src={image}
            alt="member"
            width={120}
            height={140}
            className={styles.image}
          />
        </div>
        <div className={styles.card_titles}>
          <p className={styles.card_title}>
            {title}
            <br />
            <span className={styles.author}>By {author}</span>
          </p>
          <p className={styles.publisher}>{publisher}</p>
        </div>
      </div>
      <div className={styles.card_content}>
        <p className={styles.card_description}>
          {description.length > 100
            ? description.substring(0, 100) + "..."
            : description}
        </p>
      </div>
    </div>
  );
}
