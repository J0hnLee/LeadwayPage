import React from "react";
import { makeStyles } from "@mui/styles";
import ImgCard from "./imageCard";
import pharmIntro from "../stastic/pharmIntro";

const useStyles = makeStyles((theme) => ({
  root3: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
}));

function Pharm() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root3} id="place-to-visit">
        <ImgCard pharmIntro={pharmIntro[0]} />
        <ImgCard pharmIntro={pharmIntro[1]} />
      </div>
    </div>
  );
}

export default Pharm;
