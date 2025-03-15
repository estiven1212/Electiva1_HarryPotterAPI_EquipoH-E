export const getCharacters = () =>
    fetch("https://potterapi-fedeperin.vercel.app/en/characters")
      .then((res) => res.json())
      .catch(() => []);
  