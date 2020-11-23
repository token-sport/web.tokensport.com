import React from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  makeStyles,
  IconButton,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

const Sidebar = () => {
  const classes = useStyles();

  return (
    <>
      <h1>Sidebar. Usar un Drawer o "Cajón" de Material-UI acá.</h1>
    </>
  );
};

export default Sidebar;
