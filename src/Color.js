import TextField from "@mui/material/TextField";
// import "./App.css";
import Button from "@mui/material/Button";
import { useState } from "react";

function Color() {
  const [colors, changeofcolor] = useState("");
  const styles = { background: colors };
  const [colorlist, colorlistchange] = useState(["pink", "red", "yellow"]);
  return (
    <div className="App">
      <TextField
        label="Enter Color"
        style={styles}
        variant="outlined"
        onChange={(event) => changeofcolor(event.target.value)}
      />
      <Button
        variant="outlined"
        onClick={() => colorlistchange([...colorlist, colors])}
      >
        Add
      </Button>
      <div>
        {colorlist.map((clr) => (
          <Colorbox clr={clr} />
        ))}
      </div>
    </div>
  );
}

function Colorbox({ clr }) {
  const style = {
    height: "25px",
    width: "250px",
    background: clr,
  };
  return <div style={style}></div>;
}

export { Color };
