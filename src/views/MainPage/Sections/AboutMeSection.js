import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import LazyLoad from "react-lazyload";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import { Typography } from "@material-ui/core";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import kama from "assets/img/kama.jpg";

const useStyles = makeStyles(styles);

export default function AboutMeSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <Typography variant = "h2" color="primary">O mnie</Typography>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card plain>
              <GridItem xs={12} sm={12} md={4} className={classes.itemGrid}>
                <LazyLoad><img src={kama} alt="..." className={imageClasses} /></LazyLoad>
              </GridItem>
              {/* <h4 className={classes.cardTitle}>
                <br/>
                Kamila Watychowicz
                <br />
                <small className={classes.smallTitle}>Instruktor</small>
              </h4> */}
              <br/>
              <Typography variant = "h4" color="primary">Kamila Watychowicz</Typography>
              <br/>
              <Typography variant = "h5" color="primary">nauczycielka jogi</Typography>
              <CardBody>
                <Typography variant = "body1" color="primary">
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </Typography>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
         
        </GridContainer>
      </div>
    </div>
  );
}
