import{ init, send } from 'emailjs-com';
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Check from "@material-ui/icons/Check";

init("user_jfoLfAjdGwL2ZXqTwd4dg");

function sendMail (setShowSpinner, sendCopy, setNotification, variables) {
   
    setShowSpinner(true);

    const templateId = 'template_z3mnlzw';
    const copyTemplateId ='template_04uphkb';
    const serviceId = 'service_qa6xxw9'

    console.log(variables);

    send(
      serviceId, templateId,
      variables
      ).then(res => {
        setNotification(
          <SnackbarContent
            message={
              <span>
                Dziękuję za przesłanie wiadomości. Skontaktuję się z Tobą tak szybko jak będzie to możliwe...
              </span>
            }
            close
            color="success"
            icon={Check}
          />
        )
        setShowSpinner(false);
      })
      .catch(err => {
        setNotification(
          <SnackbarContent
            message={
              <span>
                Niestety nie udało się przesłać wiadomości. Spróbuj ponownie...
              </span>
            }
            close
            color="danger"
            icon="info_outline"
          />
        )
        setShowSpinner(false);
      })

      if (sendCopy) {
        send(
          serviceId, copyTemplateId,
          variables
          ).then(res => {
            console.log("the copy message send succesfully");
          })
          .catch(err => {
            console.log("error while sending the copy message.", err);
          })
      }
  }

export default sendMail;