import React from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  makeStyles,
  IconButton,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

const Navigation = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Navigation. Usar una AppBar de Material-UI acá.
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </>
  );
};

export default Navigation;
