import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import { Element } from "react-scroll";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Typography from "@material-ui/core/Typography";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import AboutTrainingsSection from "./Sections/AboutTrainingsSection.js";
import AboutMeSection from "./Sections/AboutMeSection.js";
import ContactUsSection from "./Sections/ContactUsSection.js";
import AboutWorkshopsSection from "./Sections/AboutWorkshopsSection.js";
import AboutStudioSection from "./Sections/AboutStudioSection.js";
import TimeTableSection from "./Sections/TimeTableSection.js";

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import logo from "assets/img/logo_small.jfif";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#595855",
    },
    secondary: {
      main: '#A9B7C0',
    },
  },
});

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function MainPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <ThemeProvider theme={theme}>
      <Header
        color="gray"
        routes={dashboardRoutes}
        brand={<img src={logo} alt="logo"/>}
        rightLinks={<HeaderLinks />}
        fixed
        // changeColorOnScroll={{
        //   height: 400,
        //   // color: "gray",
        // }}
        {...rest}
      />
      
      <Parallax image={require("assets/img/joga.jpg").default}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8}>
              <Typography variant="h3" style={{color:"#595855"}}>Kamila Watychowicz</Typography>
              <br/>
              <Typography variant="h5" style={{color:"#595855"}}>Joga dla Ciebie i Twojego dziecka<br/><br/><br/></Typography>
              
            </GridItem>
          </GridContainer>
          <a 
            href='https://pl.freepik.com/zdjecia/sport' 
            style={{
              position:"fixed",
              bottom: "60px",
              right: "20px"
            }}> 
              <Typography variant="caption" color="primary">
                Zdjęcie utworzone przez freepik - pl.freepik.com
              </Typography>
          </a>
        </div>
      </Parallax>
     
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          
          <Element name = "AboutTraining">
            <AboutTrainingsSection />
          </Element>
          
          <Element name = "AboutWorkshops">
            <AboutWorkshopsSection />
          </Element>

          <Element name = "AboutStudio" >
            <AboutStudioSection />
          </Element>

          <Element name = "TimeTable" >
            <TimeTableSection />
          </Element>

          <Element name = "AboutMe">
            <AboutMeSection />
          </Element>

          <Element name = "ContactUs">
            <ContactUsSection />
          </Element>
          
        </div>
      </div>
      <Footer />
    </ThemeProvider>
  );
}
