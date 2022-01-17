import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root1: {
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
    //maxWidth: 245,
    background: "rgba(0,0,0,0.5)",
    margin: "10px",
    borderRadius: "1000",
    height: "800px",
  },
  media: {
    height: 500,
  },
  title: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#fff",
  },
  desc: {
    fontFamily: "Nunito",
    fontSize: "1.1rem",
    color: "#ddd",
  },
});
export default function ImgCard({ pharmIntro }) {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root1} sx={{ maxWidth: 500 }}>
        <CardMedia
          className={classes.media}
          component="img"
          alt="嘎嘎嗚拉拉"
          height="200"
          image={pharmIntro.imageUrl}
        />
        <CardContent>
          <Typography
            className={classes.title}
            gutterBottom
            variant="h5"
            component="div"
          >
            {pharmIntro.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className={classes.desc}
          >
            {pharmIntro.description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
