import React, { useState, useEffect } from "react";
import { getCharacters } from "./helpers/getImage";
import useHarryPotterBooks from "./Hooks/useHarryPotterBooks"; // Importa el nuevo hook

export const HarryPotter = () => {
  const [characters, setCharacters] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const { books, loading: booksLoading } = useHarryPotterBooks(); // Obtiene los libros

  useEffect(() => {
    getCharacters().then((data) => {
      setCharacters(data);
      setLoading(false);
    });
  }, []);

  const cambiarPersonaje = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % characters.length);
  };

  if (loading) return <p>Cargando personajes...</p>;
  if (characters.length === 0) return <p>No hay personajes disponibles.</p>;

  const personaje = characters[currentIndex];

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Personajes de Harry Potter</h1>
      <h2>{personaje.name}</h2>
      <img
        src={personaje.image || "https://via.placeholder.com/150"}
        alt={personaje.name}
        style={{ width: "200px", height: "250px", borderRadius: "8px" }}
      />
      <br />
      <button onClick={cambiarPersonaje}>Cambiar Personaje</button>

      <h2>Lista de Libros de Harry Potter</h2>
      {booksLoading ? (
        <p>Cargando libros...</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book.id}>{book.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
