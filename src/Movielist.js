import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { useHistory } from "react-router-dom";

export function Movielist({ movielists, Setmovie }) {
  return (
    <div className="App">
      {movielists.map(({ name, url, rating, summary }, index) => (
        <Display
          deletebtn={
            <Button
              variant="outlined"
              id="delebtn"
              onClick={() => {
                const deleteindex = index;
                const remaining = movielists.filter(
                  (m, indx) => deleteindex !== indx
                );
                Setmovie(remaining);
              }}
            >
              Delete
            </Button>
          }
          name={name}
          url={url}
          rating={rating}
          summary={summary}
          index={index}
        />
      ))}
    </div>
  );
}
function Display({ name, url, rating, summary, deletebtn, index }) {
  var styles = {
    color: rating >= 8.5 ? "green" : "yellow",
  };

  const [show, setShow] = useState(true);
  let summarystyle = { display: show ? "none" : "block", color: "azure" };

  const [like, setLike] = useState(0);
  const [Dislike, setDislike] = useState(0);

  const histroy = useHistory();

  return (
    <Card sx={{ maxWidth: 300, height: "auto" }} id="card">
      <CardMedia component="img" height="340" image={url} alt={name} />
      <CardContent>
        <Typography gutterBottom component="div">
          <h2>{name}</h2>
          <p>
            IMDB : <span style={styles}>{rating}</span> ⭐
          </p>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Button
            variant="outlined"
            id="showdes"
            onClick={() => setShow(!show)}
          >
            {" "}
            {show ? "Show More" : "Show Less"}{" "}
          </Button>
          <p style={summarystyle}>{summary}</p>
          <br />
        </Typography>
        <IconButton
          aria-label="delete"
          size="large"
          color="success"
          onClick={() => histroy.push(`/Movielist/${index}`)}
        >
          <InfoIcon />
        </IconButton>
      </CardContent>
      <CardActions>
        <IconButton
          aria-label="delete"
          size="large"
          onClick={() => setLike(like + 1)}
          color="success"
        >
          <Badge badgeContent={like} color="success">
            👍
          </Badge>
        </IconButton>

        {deletebtn}

        <IconButton
          aria-label="delete"
          size="large"
          onClick={() => setDislike(Dislike + 1)}
          color="error"
        >
          <Badge badgeContent={Dislike} color="error">
            👎
          </Badge>
        </IconButton>
      </CardActions>
    </Card>
  );
}
