import React from "react";

const PopularBooks = () => {
  const popularBooks = [
    {
      title: "Dasar‑Dasar Teknik Informatika",
      author: "Novega Pratama Adiputra",
      publisher: "Deepublish",
      image:
        "C:UsersLENOVODocumentspengumpulanTugaswebpertemuan12srccomponentsDasar-dasar-Teknik-Informatika.jpg",
    },
    {
      title: "metode penelitian teknik informatika",
      author: "Ade Johar Maturidi",
      publisher: "Deepublish",
      image: "",
    },
    {
      title: "Buku ajar aplikasi komputer",
      author: "Buhori muslim",
      publisher: "Deepublish",
      image:
        "C:UsersLENOVODocumentspengumpulanTugaswebpertemuan12srccomponentsBuku-Ajar-Aplikasi-Komputer.jpg",
    },
  ];

  return (
    <div className="popular-books">
      <h2>Popular</h2>
      <div className="books-grid">
        {popularBooks.map((book, index) => (
          <div key={index} className="book-card">
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.publisher}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularBooks;
