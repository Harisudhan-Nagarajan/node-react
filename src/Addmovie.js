import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router";

export function Addmovie({
  movielists,
  newmovie,
  Setmovie,
  setName,
  setPic,
  setRating,
  setSummary,
}) {
  const history = useHistory();

  return (
    <div className="inputfield">
      <TextField
        id="nameid"
        label="Enter Movie Name"
        variant="outlined"
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        id="urlid"
        label="Enter Image URL"
        variant="outlined"
        onChange={(event) => setPic(event.target.value)}
      />
      <TextField
        id="ratingid"
        label="Enter Movie Rating"
        variant="outlined"
        onChange={(event) => setRating(event.target.value)}
      />
      <TextField
        id="outlined-multiline-flexible"
        label="Enter Movie Summary"
        multiline
        maxRows={4}
        onChange={(event) => setSummary(event.target.value)}
      />
      <Button
        variant="outlined"
        id="addbtn"
        onClick={() => {
          newmovie.name !== "" &&
          newmovie.url !== "" &&
          newmovie.rating !== "" &&
          newmovie.summary !== ""
            ? Setmovie([...movielists, newmovie])
            : alert("Input field Can't be empty");
          history.push("/Movielist");
        }}
      >
        Add
      </Button>
    </div>
  );
}
