export default function MovieCard({ title, image }) {
  return (
    <div className="movie-card">
      <img src={image} alt={title} />
      <h4>{title}</h4>
    </div>
  );
}
