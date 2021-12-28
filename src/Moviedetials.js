import { useParams } from "react-router-dom";

export function Moviedetials({ movielists }) {
  const { id } = useParams();

  const infomovie = movielists.filter((movies, index) => index == id);

  const { name, url, summary, rating, trailer } = infomovie[0];

  return (
    <div>

      <iframe
        width="900"
        height="506"
        src={`https://www.youtube.com/embed/${trailer}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}
