import Link from "next/link";
import React from "react";
import MovieCard from "../components/MovieCard";
import styles from "@/app/styles/common.module.scss";

const Movie = async () => {
  const url = process.env.RAPID_KEY;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "01146b75d8mshd6322d6f545d761p13f1c1jsn0ae7751a7b07",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;

  console.log(data);
  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Movies & Series</h1>
          {/* <Link href={"/movie/afeb"}>go to</Link> */}
          <div className={styles.card_section}>
            {main_data.map((currElement) => {
              return <MovieCard key={currElement.id} {...currElement} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Movie;
