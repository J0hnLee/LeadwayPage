import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { AppBar, IconButton } from "@mui/material/";
import { FiAlignRight } from "react-icons/fi";
import { Toolbar } from "@material-ui/core";
import styles from "./header.module.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Collapse } from "@mui/material";
import { Link as Scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: `none`,
  },
  container: {
    alignItems: "center",
  },
}));

function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={styles.root2}>
      <AppBar className={styles.appbar} color="transparent" elevation={0}>
        <Toolbar className={styles.appbarWrapper}>
          <hi className={styles.appTitle}>LeadWay</hi>
          <IconButton>
            <FiAlignRight className={styles.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 2500 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={styles.title}>
            歡迎來到
            <br />
            <span className={styles.colorText1}>理維</span>藥局
          </h1>
        </div>
        <div className={styles.buttons}>
          <Scroll to="place-to-visit" smooth={true}>
            <IconButton>
              <MdOutlineKeyboardArrowDown className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}

export default Header;
