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
  offset: theme.mixins.toolbar,
  menuButton: {
    marginRight: theme.spacing(2),
  },
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
          <IconButton
            color="inherit"
            aria-label="menu"
            className={classes.menuButton}
          ></IconButton>
          <Typography variant="h6" className={classes.title}>
            Ignacio C.
          </Typography>
          <Button variant="text" color="inherit">
            Button Example
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </>
  );
};

export default Navigation;
