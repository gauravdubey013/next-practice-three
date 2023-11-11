import React from "react";
import Image from "next/image";
import styles from "@/app/styles/common.module.scss";
import Link from "next/link";

const MovieCard = (currElement) => {
  const { id, type, title, synopsis } = currElement.jawSummary;

  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_image}>
          <Image
            src={currElement.jawSummary.backgroundImage.url}
            alt={title}
            width={260}
            height={200}
          />
        </div>

        <div className={styles.card_data}>
            <h2>{title}</h2>
            <p>{synopsis.substring(0,100)} ...</p>

            <Link href={`/movie/${id}`}>
                <button>Read More</button>
            </Link>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
