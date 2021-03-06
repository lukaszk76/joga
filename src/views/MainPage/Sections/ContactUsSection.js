import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ReCAPTCHA from "react-google-recaptcha";
import sendMail from "support/sendMail";
import RODOModal from "custom_components/RODOModal";
// @material-ui/icons
import Mail from "@material-ui/icons/Mail";
import Phone from "@material-ui/icons/Phone";
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
          
          <Typography variant = "body1" color="primary">
            Mo??esz u??y?? poni??szego formularza aby przes??a?? mi wiadomo????. <br/><br/>
            Je??li wolisz mo??esz te?? do mnie zadzwoni?? lub napisa?? maila:
          </Typography>
          <Button href="tel:+48604153665"><Phone/>+48 604 153 665</Button>
          <Button style={{marginLeft: "30px"}} href="mailto: kamilawatychowicz@gmail.com"><Mail/>kamilawatychowicz@gmail.com</Button>

          <form>
            <GridContainer>

              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Imi??"
                  id="name"
                  formControlProps={{
                    fullWidth: true
                  }}
                  onChange = {nameChanged}
                />
              </GridItem>

              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Tw??j mail"
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                  onChange = {mailChanged}
                />
              </GridItem>

              <GridItem xs={12} sm={12} md={6}>
              
                <CustomInput
                  labelText="Tw??j telefon"
                  id="phone"
                  formControlProps={{
                    fullWidth: true
                  }}
                  onChange = {phoneChanged}
                />
              </GridItem>

              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="Wiadomo????"
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
                <Typography variant="caption" className={classes.description}>Klikaj??c "Wy??lij wiadomo????" akceptujesz moj??{" "}
                <br/><span onClick={rodoClicked}><b>Polityk?? Prywatno??ci</b></span><br/></Typography>
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
                    label="Wy??lij kopi?? do mnie"
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
                  // color="primary"
                  onClick={e => sendClicked(e)}
                  style={{marginTop: "15px"}}>
                    <Mail className={classes.icons} />
                    Wy??lij wiadomo????
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
