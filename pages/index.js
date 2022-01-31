import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Card from "../components/Card";
import styles from "../styles/Home.module.css";
import TextField from "@mui/material/TextField";
import Footer from "../components/Footer";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import Navbar from "../components/Navbar";

export default function Home({ books }) {
  const [search, setSearch] = useState("");

  const filteredBooks = books?.filter(
    (book) =>
      book?.title.toLowerCase().includes(search) ||
      book?.author.toLowerCase().includes(search) ||
      book?.publisher.toLowerCase().includes(search)
  );

  const onInputChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <>
      <Navbar onInputChange={onInputChange}/>
      <div className={styles.container}>
        <Head>
          <title>Books Finder</title>
          <meta
            name="description"
            content="Books Finder is an app that can list you all the books with its primary data "
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
          <div className={styles.metrics}>
            <div className={styles.books_count_metric}>
              <div className={styles.books_icon}>
                <LibraryBooksIcon sx={{ color: "white", fontSize: 50 }} />
              </div>
              <div className={styles.books_count_data}>
                <p>Books Count</p>
                <p>{books?.length}</p>
              </div>
            </div>
          </div>
          <div className={styles.cards}>
            {filteredBooks?.map((book) => (
              <Card
                key={book.id}
                title={book.title}
                author={book.author}
                publisher={book.publisher}
                image={book.image}
                description={book.description}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://fakerapi.it/api/v1/books?_quantity=10");
  const books = await res.json();

  return {
    props: {
      books: books.data,
    },
  };
};
