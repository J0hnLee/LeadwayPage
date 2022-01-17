import "./App.css";
import React from "react";
import { makeStyles } from "@mui/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Image2 from "./asserts/background_img3.jpeg";
import Header from "./componments/Header";
import Pharm from "./componments/pharm";

const useStyles = makeStyles((theme) => ({
  root4: {
    backgroundImage: `url(${Image2})`,
    minHeight: "500vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    alignItems: "center",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root4}>
        <CssBaseline />
        <Header />
        <Pharm />
      </div>
    </div>
  );
}

export default App;
