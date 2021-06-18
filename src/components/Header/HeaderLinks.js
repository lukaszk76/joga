/*eslint-disable*/
import React from "react";
import {Link as ScrollLink, scroller, animateScroll as scroll} from "react-scroll";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import { Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";

// @material-ui/icons
import MailIcon from '@material-ui/icons/Mail';
import FacebookIcon from '@material-ui/icons/Facebook';
import HomeIcon from "@material-ui/icons/Home";

// core components

import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {

  const scrollToAboutTraining = () => {
    scroller.scrollTo("AboutTraining", {
      spy: true,
      smooth: true,
      offset: 0,
      duration: 500
    })
  }

  const scrollToAboutWorkshops = () => {
    scroller.scrollTo("AboutWorkshops", {
      spy: true,
      smooth: true,
      offset: 0,
      duration: 500
    })
  }

  const scrollToAboutStudio = () => {
    scroller.scrollTo("AboutStudio", {
      spy: true,
      smooth: true,
      offset: 0,
      duration: 500
    })
  }

  const scrollToAboutMe = () => {
    scroller.scrollTo("AboutMe", {
      spy: true,
      smooth: true,
      offset: 0,
      duration: 500
    })
  }

  const scrollToContactUs = () => {
    scroller.scrollTo("ContactUs", {
      spy: true,
      smooth: true,
      offset: 0,
      duration: 500
    })
  }

  const scrollToTimeTable = () => {
    scroller.scrollTo("TimeTable", {
      spy: true,
      smooth: true,
      offset: 0,
      duration: 500
    })
  }
  
  const classes = useStyles();
  return (
    <List className={classes.list} style={{color:"#595855"}}>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="home"
          title="Powrót na górę strony"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
          onClick={scroll.scrollToTop}
        >
          <IconButton
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <HomeIcon/>
          </IconButton>
        </Tooltip>
      </ListItem>
      
      <ListItem className={classes.listItem}>   
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
            onClick = {scrollToAboutTraining}
          >
            <Typography variant="button">Zajęcia</Typography>
          </Button>
       
      </ListItem>
      
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          target="_blank"
          className={classes.navLink}
          onClick={scrollToAboutWorkshops}
        >
          <Typography variant="button"  >Warsztaty</Typography>
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          target="_blank"
          className={classes.navLink}
          onClick={scrollToAboutStudio}
        >
          <Typography variant="button" >Studio</Typography>
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          target="_blank"
          className={classes.navLink}
          onClick={scrollToAboutMe}
        >
          <Typography variant="button" >O mnie</Typography>
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          target="_blank"
          className={classes.navLink}
          onClick={scrollToTimeTable}
        >
          <Typography variant="button" >Grafik</Typography>
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="mail"
          title="Napisz do mnie"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
          onClick={scrollToContactUs}
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
