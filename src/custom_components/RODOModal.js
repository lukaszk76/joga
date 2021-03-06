import React from 'react';

import { makeStyles } from "@material-ui/core/styles";

import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "components/CustomButtons/Button.js";
import Typography from "@material-ui/core/Typography";

import Close from "@material-ui/icons/Close";

import styles from "assets/jss/material-kit-react/views/componentsSections/javascriptStyles.js";

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

const RODOModal = ( props ) => {

    function modalClose () {
        props.setShowRodo(false)
    };

    const classes = useStyles();
    
    let color = "info";

    let buttonText = "zamknij";

    return(
        <Dialog
            classes={{
            root: classes.center,
            paper: classes.modal
            }}
            open={props.showRodo}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => modalClose()}
            aria-labelledby="classic-modal-slide-title"
            aria-describedby="classic-modal-slide-description"
        >
            <DialogTitle
                id="classic-modal-slide-title"
                disableTypography
                className={classes.modalHeader}
                >

                <IconButton
                    className={classes.modalCloseButton}
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    onClick={() => modalClose()}
                >
                    <Close className={classes.modalClose} />
                </IconButton>
                
                <h4 className={classes.modalTitle}>Polityka Prywatno??ci</h4>
            
            </DialogTitle>
            
            <DialogContent
                id="classic-modal-slide-description"
                className={classes.modalBody}
                >
                <Typography variant="h6">A. Wprowadzenie</Typography>
                <Typography varinat="body1">
                Prywatno???? odwiedzaj??cych nasz?? stron?? internetow?? jest dla nas bardzo wa??na i dok??adamy wszelkich stara??, aby j?? chroni??. Niniejsza polityka wyja??nia, co robimy z Twoimi danymi osobowymi.
                Zgoda na korzystanie z plik??w cookie zgodnie z warunkami niniejszej polityki podczas pierwszej wizyty na naszej stronie pozwala nam na korzystanie z plik??w cookie przy ka??dej kolejnej wizycie na naszej stronie.
                <br/>
                </Typography>
                <br/>
                <Typography variant="h6">B. ??r??d??o</Typography>
                <Typography varinat="body1">
                Ten dokument zosta?? utworzony przy u??yciu szablonu firmy SEQ Legal (seqlegal.com)
                i zmodyfikowany dla cel??w Centrum Nurkowego Nautilus (nautilius.com.pl)
                <br/>
                </Typography>
                <br/>
                <Typography variant="h6">C. Zbieranie danych osobowych</Typography>
                <Typography varinat="body1">
                Nast??puj??ce rodzaje danych osobowych mog?? by?? gromadzone, przechowywane i wykorzystywane:

                <ul>
                <li>informacje, takie jak imi?? i nazwisko, adres e-mail oraz numer telefomu, kt??re podajesz w celu skontaktowania si?? z nami lub skonfigurowania naszych e-maili lub biuletyn??w</li>
                <li>informacje wprowadzane podczas korzystania z us??ug na naszej stronie internetowej</li>
                <li>informacje zawarte we wszelkiej korespondencji przesy??anej do nas e-mailem lub za po??rednictwem naszej strony internetowej, w tym tre??ci komunikacyjne i metadane</li>
                <li>wszelkie inne dane osobowe, kt??re nam przesy??asz.</li>
                </ul>
                Zanim ujawnisz nam dane osobowe innej osoby, musisz uzyska?? zgod?? tej osoby na ujawnienie i przetwarzanie tych danych osobowych zgodnie z niniejszymi zasadami
                <br/>
                </Typography>
                <br/>
                <Typography variant="h6">D. Korzystanie z Twoich danych osobowych</Typography>
                <Typography varinat="body1">
                Dane osobowe przes??ane do nas za po??rednictwem naszej strony internetowej b??d?? wykorzystywane do cel??w okre??lonych w niniejszej polityce lub na odpowiednich stronach witryny. Mo??emy wykorzystywa?? Twoje dane osobowe do celu:
                <ul>
                <li>administrowania nasz?? stron?? internetow?? i biznesem;</li>
                <li>personalizowania naszej strony internetowej dla Ciebie;</li>
                <li>umo??liwienia korzystania z us??ug dost??pnych na naszej stronie internetowej;</li>
                <li>wysy??ania towar??w zakupionych za po??rednictwem naszej strony internetowej;</li>
                <li>??wiadczenia us??ug zakupionych za po??rednictwem naszej strony internetowej;</li>
                <li>wysy??ania do ciebie wyci??g??w, faktur i przypomnie?? o p??atno??ciach oraz odbioru p??atno??ci od Ciebie;</li>
                <li>przesy??ania niemarketingowej komunikacji handlowej;</li>
                <li>wysy??ania powiadomie?? e-mail, o kt??re prosi??e??;</li>
                <li>wysy??ania naszego newslettera e-mail, je??li o to poprosi??e?? (mo??esz nas w ka??dej chwili poinformowa??, je??li nie chcesz ju?? otrzymywa?? newslettera);</li>
                <li>przesy??ania informacji marketingowych dotycz??cych naszej dzia??alno??ci lub aktywno??ci starannie wybranych stron trzecich, kt??re naszym zdaniem mog?? Ci?? zainteresowa??, poczt?? lub, je??li wyrazi??e?? na to zgod??, poczt?? elektroniczn?? lub podobn?? technologi?? (mo??esz nas o tym poinformowa?? w dowolnym momencie, je??li nie chcesz ju?? otrzymywa?? komunikat??w marketingowych);</li>
                <li>dostarczania stronom trzecim informacji statystycznych o naszych u??ytkownikach (ale te osoby trzecie nie b??d?? w stanie zidentyfikowa?? ??adnego konkretnego u??ytkownika na podstawie tych informacji);</li>
                <li>zajmowania si?? zapytaniami i skargami sk??adanymi przez Ciebie lub dotycz??cymi Ciebie w zwi??zku z nasz?? witryn??;</li>
                <li>zapewnienia bezpiecze??stwa naszej strony internetowej i zapobieganie oszustwom;</li>
                <li>weryfikacji zgodno??ci z warunkami korzystania z naszej strony internetowej (w tym monitorowanie prywatnych wiadomo??ci wysy??anych za po??rednictwem naszej prywatnej us??ugi przesy??ania wiadomo??ci);</li>
                <li>innych zastosowa??.</li>
                </ul>
                Je??li prze??lesz dane osobowe do publikacji w naszej witrynie, opublikujemy je i wykorzystamy w inny spos??b zgodnie z udzielon?? nam licencj??.

                Twoje ustawienia prywatno??ci mog?? by?? wykorzystane do ograniczenia publikacji Twoich informacji na naszej stronie internetowej i mog?? by?? dostosowane za pomoc?? kontroli prywatno??ci na stronie.

                Nie b??dziemy bez Twojej wyra??nej zgody przekazywa?? danych osobowych stronom trzecim, lub jakimkolwiek innym zwi??zanym z nimi stronom trzecim, w celach marketingu bezpo??redniego.
                <br/>
                </Typography>
                <br/>
                <Typography variant="h6">E. Ujawnianie danych osobowych</Typography>
                <Typography varinat="body1">
                Mo??emy ujawnia?? dane osobowe u??ytkownika wszelkim naszym pracownikom, cz??onkom kadry kierowniczej, przedstawicielom, dostawcom lub podwykonawcom, o ile jest to niezb??dne do cel??w okre??lonych w niniejszych ???Zasadach ochrony prywatno??ci???.

                Mo??emy ujawnia?? dane osobowe wszelkim cz??onkom naszej grupy sp????ek (tzn. sp????kom zale??nym, g????wnej sp????ce holdingowej i jej sp????kom zale??nym), o ile jest to niezb??dne do cel??w okre??lonych w niniejszych ???Zasadach ochrony prywatno??ci???.

                Mo??emy ujawnia?? Twoje dane osobowe:
                <ul>
                <li>w zakresie, w jakim jest to wymagane przepisami prawa;</li>
                <li>w zwi??zku z trwaj??cymi lub potencjalnymi post??powaniami prawnymi;</li>
                <li>w celu ustanowienia, wyegzekwowania lub obrony naszych praw (wliczaj??c w to udost??pnienie informacji innym podmiotom w celu przeciwdzia??ania oszustwom);</li>
                <li>nabywcy (lub potencjalnemu nabywcy) jakiejkolwiek dzia??alno??ci lub aktyw??w, kt??re sprzedajemy (lub rozwa??amy);</li>
                <li>wszelkim osobom, kt??re wedle naszej zasadnej opinii mog?? wyst??pi?? do s??du lub innego w??a??ciwego organu o ujawnienie takich danych osobowych, je??li wedle zasadnej rozs??dnej opinii, istnieje du??e prawdopodobie??stwo, ??e taki s??d lub organ naka??e ujawnienie takich danych osobowych</li>
                </ul>
                Z wyj??tkiem postanowie?? zawartych w niniejszych ???Zasadach ochrony prywatno??ci??? nie b??dziemy udost??pnia?? osobom trzecim informacji dotycz??cych u??ytkownika.
                <br/>
                </Typography>
                <br/>
                <Typography variant="h6">F. Mi??dzynarodowe transfery danych</Typography>
                <Typography varinat="body1">
                Informacje, kt??re gromadzimy mog?? by?? przechowywane i przetwarzane w ka??dym z kraj??w, w kt??rym prowadzimy dzia??alno???? i mog?? by?? przesy??ane pomi??dzy tymi krajami w celu umo??liwienia wykorzystania informacji zgodnie z niniejszymi ???Zasadami ochrony prywatno??ci???.
                Informacje, kt??re zbieramy, mog?? by?? przekazywane do nast??puj??cych kraj??w, kt??re nie maj?? przepis??w o ochronie danych r??wnowa??nych z obowi??zuj??cymi w Europejskim Obszarze Gospodarczym: Stan??w Zjednoczonych Ameryki, Rosji, Japonii, Chin i Indii.
                Dane osobowe, kt??re publikujesz na naszej stronie internetowej lub przesy??asz do publikacji na naszej stronie internetowej, mog?? by?? dost??pne za po??rednictwem Internetu na ca??ym ??wiecie. Nie mo??emy zapobiec wykorzystywaniu lub niew??a??ciwemu wykorzystaniu takich informacji przez inne osoby.
                Wyra??nie zgadzasz si?? na przekazywanie danych osobowych opisanych w tej sekcji F.
                <br/>
                </Typography>
                <br/>
                <Typography variant="h6">G. Zachowywanie danych osobowych</Typography>
                <Typography varinat="body1">
                W Niniejszej Sekcji G okre??lili??my nasze zasady i procedury dotycz??ce zatrzymywania danych, kt??re maj?? na celu zapewnienie przestrzegania naszych zobowi??za?? prawnych w zakresie zachowywania i usuwania danych osobowych.
                Dane osobowe, kt??re przetwarzamy w dowolnym celu lub celach, nie b??d?? przechowywane d??u??ej ni?? jest to konieczne do tego celu lub tych cel??w.
                Bez uszczerbku dla artyku??u G-2 zazwyczaj usuwamy dane osobowe nale????ce do kategorii okre??lonych poni??ej w dniu/godzinie okre??lonej poni??ej:
                typ danych osobowych zostanie usuni??ty
                Niezale??nie od innych postanowie?? niniejszej sekcji G zachowamy dokumenty (w tym dokumenty elektroniczne) zawieraj??ce dane osobowe:
                w zakresie, w jakim jest to wymagane przepisami prawa;
                je??li uwa??amy, ??e dokumenty mog?? mie?? znaczenie dla wszelkich tocz??cych si?? lub przysz??ych post??powa?? s??dowych; i
                w celu ustanowienia, wyegzekwowania lub obrony naszych praw (wliczaj??c w to udost??pnienie informacji innym podmiotom w celu przeciwdzia??ania oszustwom).
                <br/>
                </Typography>
                <br/>
                <Typography variant="h6">H. Bezpiecze??stwo danych osobowych</Typography>
                <Typography varinat="body1">
                Podejmiemy zasadne techniczne i organizacyjne ??rodki ostro??no??ci w celu przeciwdzia??ania utracie, nadu??yciu lub zmianie danych osobowych u??ytkownika.
                B??dziemy przechowywa?? wszystkie dane osobowe, kt??re podasz na naszych bezpiecznych serwerach (chronionych has??em i zapor??).
                Wszystkie elektroniczne transakcje finansowe zawierane za po??rednictwem naszej strony internetowej b??d?? chronione technologi?? szyfrowania.
                U??ytkownik przyjmuje do wiadomo??ci, ??e transmisja informacji przez Internet jest potencjalnie niebezpieczna i bezpiecze??stwo przes??anych w ten spos??b danych nie jest gwarantowane.
                Jeste?? odpowiedzialny za zachowanie poufno??ci has??a u??ywanego do uzyskania dost??pu do naszej strony internetowej; nie poprosimy Ci?? o podanie has??a (z wyj??tkiem sytuacji, gdy logujesz si?? na naszej stronie internetowej).
                <br/>
                </Typography>
                <br/>
                <Typography variant="h6">I. Nowelizacje</Typography>
                <Typography varinat="body1">
                Niniejsze zasady mog?? by?? okresowo aktualizowane poprzez zamieszczenie w naszej witrynie ich nowej wersji. Nale??y od czasu do czasu sprawdza?? t?? stron??, aby upewni?? si??, ??e rozumiesz wszelkie zmiany w tych zasadach. Mo??emy powiadomi?? Ci?? o zmianach w niniejszej polityce za po??rednictwem poczty elektronicznej lub prywatnego systemu przesy??ania wiadomo??ci na naszej stronie internetowej.
                <br/>
                </Typography>
                <br/>
                <Typography variant="h6">J. Twoje prawa</Typography>
                <Typography varinat="body1">
                U??ytkownik mo??e za????da?? udost??pnienia jego danych osobowych, kt??re s?? przechowywane. Udost??pnienie takich danych wi????e si?? z:

                uiszczeniem op??aty  i
                dostarczenie odpowiedniego dowodu to??samo??ci ().
                Mo??emy na Twoje ????danie ukrywa?? dane osobowe, w zakresie dozwolonym przez prawo.

                Mo??esz w dowolnym momencie poinstruowa?? nas, aby nie przetwarza?? danych osobowych w celach marketingowych.

                W praktyce zazwyczaj albo z g??ry wyra??nie wyra??asz zgod?? na wykorzystanie przez nas Twoich danych osobowych w celach marketingowych, albo zapewnimy Ci mo??liwo???? rezygnacji z udost??pniania Twoich danych osobowych w celach marketingowych.
                <br/>
                </Typography>
                <br/>
                <Typography variant="h6">K. Strony Internetowe os??b trzecich</Typography>
                <Typography varinat="body1">
                Nasza strona internetowa zawiera hiper????cza do stron internetowych os??b trzecich oraz szczeg????owe informacje na ich temat. Nie mamy kontroli i nie ponosimy odpowiedzialno??ci za polityk?? prywatno??ci i praktyki os??b trzecich.
                <br/>
                </Typography>
                <br/>
                <Typography variant="h6">L. Aktualizacja informacji</Typography>
                <Typography varinat="body1">
                Prosimy o informacj?? w przypadku konieczno??ci skorygowania lub aktualizowania danych osobowych, w kt??rych posiadaniu jeste??my.
                <br/>
                </Typography>
                <br/>
                <Typography variant="h6">M. Ciasteczka</Typography>
                <Typography varinat="body1">
                Nasza strona internetowa korzysta z plik??w cookie. Plik cookie to plik zawieraj??cy identyfikator (ci??g liter i cyfr), kt??ry jest wysy??any przez serwer internetowy do przegl??darki internetowej i przechowywany przez przegl??dark??. Dane identyfikacyjne s?? ponownie przesy??ane na serwer za ka??dym razem, gdy przegl??darka wy??le ????danie otwarcia strony znajduj??cej si?? na serwerze. Pliki cookie mog?? by?? ???trwa??ymi??? lub ???sesyjnymi??? plikami cookie: trwa??e pliki cookie b??d?? przechowywane przez przegl??dark?? internetow?? i pozostan?? wa??ne do ustalonej daty wyga??ni??cia, chyba ??e u??ytkownik usunie je przed dat?? wyga??ni??cia; sesyjny plik cookie wygasa z ko??cem sesji u??ytkownika, gdy przegl??darka internetowa jest zamykana. Pliki cookie zazwyczaj nie zawieraj?? ??adnych informacji identyfikuj??cych u??ytkownika, ale dane osobowe, kt??re przechowujemy na Tw??j temat, mog?? by?? powi??zane z informacjami przechowywanymi w plikach cookie i uzyskiwanymi z nich. 

                Nazwy plik??w cookie, kt??rych u??ywamy na naszej stronie internetowej, oraz cele, w kt??rych s?? wykorzystywane, s?? okre??lone poni??ej:
                u??ywamy Google Analytics i Adwords na naszej stronie internetowej, aby rozpozna?? komputer, gdy u??ytkownik ;
                Wi??kszo???? przegl??darek pozwala odm??wi?? przyj??cia plik??w cookie ??? na przyk??ad:
                <ul>
                <li>w przegl??darce Internet Explorer (wersja 10) mo??na blokowa?? pliki cookie, korzystaj??c z dost??pnych ustawie?? zast??powania obs??ugi plik??w cookie, klikaj??c ???Narz??dzia???, ???Opcje internetowe???, ???Prywatno???????, a nast??pnie ???Zaawansowane???;</li>
                <li>w przegl??darce Firefox (wersja 24) mo??esz zablokowa?? wszystkie pliki cookie, klikaj??c ???Narz??dzia???, ???Opcje???, ???Prywatno???????, wybieraj??c ???U??yj ustawie?? niestandardowych dla historii??? z menu rozwijanego i odznaczaj??c ???Akceptuj ciasteczka z witryn???;</li>
                <li>w Chrome (wersja 29) mo??esz zablokowa?? wszystkie pliki cookie, otwieraj??c menu ???Dostosuj i kontroluj???, klikaj??c ???Ustawienia???, ???Poka?? ustawienia zaawansowane??? i ???Ustawienia tre??ci???, a nast??pnie wybieraj??c ???Blokuj witrynom ustawianie dowolnych danych??? pod nag????wkiem ???Pliki cookie???.</li>
                </ul>
                Zablokowanie wszystkich plik??w cookie b??dzie mia??o negatywny wp??yw na mo??liwo???? korzystania z wielu stron internetowych. Je??li zablokujesz pliki cookie, nie b??dziesz m??g?? korzysta?? z wszystkich funkcji naszej strony.

                Mo??esz usun???? pliki cookie ju?? zapisane na komputerze ??? na przyk??ad:
                <ul>
                <li>w przegl??darce Internet Explorer (wersja 10) nale??y r??cznie usun???? pliki cookie (instrukcje mo??na znale???? na stronie http://support.microsoft.com/kb/278835 );</li>
                <li>w przegl??darce Firefox (wersja 24) mo??esz usun???? pliki cookie, klikaj??c ???Narz??dzia???, ???Opcje??? i ???Prywatno???????, a nast??pnie wybieraj??c ???U??yj ustawie?? niestandardowych dla historii???, klikaj??c ???Poka?? pliki cookie???, a nast??pnie klikaj??c ???Usu?? wszystkie pliki cookie???;</li>
                <li>w przegl??darce Chrome (wersja 29) mo??na usun???? wszystkie pliki cookie, otwieraj??c menu ???Dostosuj i kontroluj???, klikaj??c ???Ustawienia???, ???Poka?? ustawienia zaawansowane??? i ???Wyczy???? dane przegl??darki???, a nast??pnie wybieraj??c ???Usu?? pliki cookie i dane innych stron i wtyczek??? przed klikni??ciem ???Wyczy???? dane
                przegl??dania???.</li>
                </ul>
                Usuni??cie plik??w cookie b??dzie mia??o negatywny wp??yw na u??yteczno???? wielu stron internetowych.
                </Typography>
            </DialogContent>
            
            <DialogActions className={classes.modalFooter}>
                <Button
                    onClick={() => modalClose()}
                    color={color}
                    simple
                >
                    {buttonText}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default RODOModal;