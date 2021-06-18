/*eslint-disable*/
import React from "react";

import IconButton from "@material-ui/core/IconButton";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import MailIcon from '@material-ui/icons/Mail';
import FacebookIcon from '@material-ui/icons/Facebook';

// core components

import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          Zajęcia
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          Warsztaty
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          Studio
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          O mnie
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          Grafik
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="mail"
          title="Napisz do mnie"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <IconButton
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <MailIcon/>
          </IconButton>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="mail"
          title="Odwiedź mnie na Facebooku"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <IconButton
            color="transparent"
            target="_blank"
            href="https://www.facebook.com/JogaWCiazy"
            className={classes.navLink}
          >
            <FacebookIcon/>
          </IconButton>
        </Tooltip>
      </ListItem>
      
    </List>
  );
}
