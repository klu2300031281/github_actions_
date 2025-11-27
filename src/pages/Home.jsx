import MovieCard from "../components/MovieCard";

export default function Home() {
  const movies = [
    {
      title: "Interstellar",
      image: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg",
    },
    {
      title: "Inception",
      image: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg",
    },
    {
      title: "The Dark Knight",
      image: "https://m.media-amazon.com/images/I/51EbJjlLg3L._AC_.jpg",
    },
  ];

  return (
    <div className="home-page">
      <header className="navbar">
        <h1 className="logo">StreamFlix</h1>
      </header>
      <main className="content">
        <h2>Popular Movies</h2>
        <div className="movie-grid">
          {movies.map((m) => (
            <MovieCard key={m.title} title={m.title} image={m.image} />
          ))}
        </div>
      </main>
    </div>
  );
}
