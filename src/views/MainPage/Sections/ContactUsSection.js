import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ReCAPTCHA from "react-google-recaptcha";
import sendMail from "support/sendMail";
import RODOModal from "custom_components/RODOModal";
// @material-ui/icons
import Mail from "@material-ui/icons/Mail";
import Check from "@material-ui/icons/Check";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CircularProgress from '@material-ui/core/CircularProgress';

import wStyles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import bStyles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const styles = {
  ...wStyles,
  ...bStyles
};
const useStyles = makeStyles(styles);

export default function ContactUsSection() {
  const classes = useStyles();
  const history = useHistory();

  const [name, setName] = useState(null);
  const [mail, setMail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [message, setMessage] = useState(null);

  const [showSpinner, setShowSpinner] = useState(false);
  const [showRodo, setShowRodo] = useState(false);
  const [notification,setNotification] = useState(null);

  let sendCopy = false;

  const [reCAPTCHAverified, setReCAPTCHA ] = useState(false);

  function nameChanged( event ) {
    setName(event.target.value)
  };

  function mailChanged( event ) {
    setMail(event.target.value)
  };

  function phoneChanged( event ) {
    console.log("phone changed");
    setPhone(event.target.value);
    console.log(event.target.value);
  };

  function messageChanged( event ) {
    setMessage(event.target.value)
  };

  function sendClicked (e) {
    e.preventDefault();
	  sendMail( setShowSpinner, sendCopy, setNotification,
      {message: message, name: name, mail: mail, phone: phone});
  }  

  function reCAPTCHAhandler(value) {
    if(value) {
      setReCAPTCHA(true);
    } else {
      setReCAPTCHA(false);
    };
  };

  function handleToggle () {
    sendCopy = !sendCopy;
    console.log(sendCopy);
  };

  function rodoClicked () {
    setShowRodo(true);
  }

  let displayedComponent = (
    <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>    

          <Typography variant = "h4" color="primary" style={{marginBottom: "40px"}}>
            Napisz do mnie
          </Typography>
          
          {/* <Typography variant = "body1" color="primary">
            Divide details about your product or agency work into parts. Write a
            few lines about each one and contact us about any further
            collaboration. We will responde get back to you in a couple of
            hours.
          </Typography> */}
          <form>
            <GridContainer>

              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Imię"
                  id="name"
                  formControlProps={{
                    fullWidth: true
                  }}
                  onChange = {nameChanged}
                />
              </GridItem>

              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Twój mail"
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                  onChange = {mailChanged}
                />
              </GridItem>

              <GridItem xs={12} sm={12} md={6}>
              
                <CustomInput
                  labelText="Twój telefon"
                  id="phone"
                  formControlProps={{
                    fullWidth: true
                  }}
                  onChange = {phoneChanged}
                />
              </GridItem>

              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="Wiadomość"
                  id="message"
                  formControlProps={{
                    fullWidth: true,
                    className: classes.textArea
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 5
                  }}
                  onChange = {messageChanged}
                />
              </GridItem>
              <center>{notification}</center>
              <GridItem xs={12} sm={12} md={6}>
                <Typography variant="caption" className={classes.description}>Klikając "Wyślij wiadomość" akceptujesz naszą{" "}
                <br/><span onClick={rodoClicked}><b>Politykę Prywatności</b></span><br/></Typography>
                <FormControlLabel
                    control={
                      <Checkbox
                        tabIndex={-1}
                        onClick={handleToggle}
                        checkedIcon={<Check className={classes.checkedIcon} />}
                        icon={<Check className={classes.uncheckedIcon}/>}
                        classes={{
                          checked: classes.checked,
                          root: classes.checkRoot
                        }}
                      />
                    }
                    classes={{ label: classes.label, root: classes.labelRoot }}
                    label="Wyślij kopię do mnie"
                />
              </GridItem>

              <GridItem xs={12} sm={12} md={6}>
                <center><ReCAPTCHA
                  sitekey="6LeCtUUbAAAAAM515gAErFUE7mEu0ni-XPEnuema"
                  onChange={reCAPTCHAhandler}
                  hl="pl"
                  size="normal"
                />
                </center>
                <Button 
                  disabled={!reCAPTCHAverified}
                  color="primary"
                  onClick={e => sendClicked(e)}
                  style={{marginTop: "15px"}}>
                    <Mail className={classes.icons} />
                    Wyślij wiadomość
                  </Button>
              </GridItem>
            </GridContainer>
          </form>
          </GridItem>
      </GridContainer> 
  );

  if (showSpinner) {
    displayedComponent = (
      <center><br/><br/><CircularProgress/></center>
    );
  }

  return (
    <div className={classes.section}>

      <RODOModal
        showRodo={showRodo}
        setShowRodo = {setShowRodo}
      />

          {displayedComponent} 
         
    </div>
  );
}
