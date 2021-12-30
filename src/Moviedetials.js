import { useParams ,useHistory} from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export function Moviedetials({ movielists }) {
  const { id } = useParams();

  const infomovie = movielists.filter((movies, index) => index == id);

  const { name, url, summary, rating, trailer } = infomovie[0];
  
  const histroy = useHistory();

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
      <div>
        <h2>{name}</h2>
        <p>
          IMDB : <span>{rating}</span> ⭐
        </p>
        <p>{summary}</p>
        <Button variant="outlined" 
        onClick={()=>histroy.goBack()}  startIcon={<ArrowBackIosIcon />}>
          Back
        </Button>
      </div>
    </div>
  );
}
