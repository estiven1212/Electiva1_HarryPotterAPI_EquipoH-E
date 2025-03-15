import { useState, useEffect } from "react";

const useHarryPotterBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://potterapi-fedeperin.vercel.app/en/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener los libros:", error);
        setLoading(false);
      });
  }, []);

  return { books, loading };
};

export default useHarryPotterBooks;
