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
                
                <h4 className={classes.modalTitle}>Polityka Prywatności</h4>
            
            </DialogTitle>
            
            <DialogContent
                id="classic-modal-slide-description"
                className={classes.modalBody}
                >
                <Typography variant="h6">A. Wprowadzenie</Typography>
                <Typography varinat="body1">
                Prywatność odwiedzających naszą stronę internetową jest dla nas bardzo ważna i dokładamy wszelkich starań, aby ją chronić. Niniejsza polityka wyjaśnia, co robimy z Twoimi danymi osobowymi.
                Zgoda na korzystanie z plików cookie zgodnie z warunkami niniejszej polityki podczas pierwszej wizyty na naszej stronie pozwala nam na korzystanie z plików cookie przy każdej kolejnej wizycie na naszej stronie.
                <br/>
                </Typography>
                <br/>
                <Typography variant="h6">B. Źródło</Typography>
                <Typography varinat="body1">
                Ten dokument został utworzony przy użyciu szablonu firmy SEQ Legal (seqlegal.com)
                i zmodyfikowany dla celów Centrum Nurkowego Nautilus (nautilius.com.pl)
                <br/>
                </Typography>
                <br/>
                <Typography variant="h6">C. Zbieranie danych osobowych</Typography>
                <Typography varinat="body1">
                Następujące rodzaje danych osobowych mogą być gromadzone, przechowywane i wykorzystywane:

                <ul>
                <li>informacje, takie jak imię i nazwisko, adres e-mail oraz numer telefomu, które podajesz w celu skontaktowania się z nami lub skonfigurowania naszych e-maili lub biuletynów</li>
                <li>informacje wprowadzane podczas korzystania z usług na naszej stronie internetowej</li>
                <li>informacje zawarte we wszelkiej korespondencji przesyłanej do nas e-mailem lub za pośrednictwem naszej strony internetowej, w tym treści komunikacyjne i metadane</li>
                <li>wszelkie inne dane osobowe, które nam przesyłasz.</li>
                </ul>
                Zanim ujawnisz nam dane osobowe innej osoby, musisz uzyskać zgodę tej osoby na ujawnienie i przetwarzanie tych danych osobowych zgodnie z niniejszymi zasadami
                <br/>
                </Typography>
                <br/>
                <Typography variant="h6">D. Korzystanie z Twoich danych osobowych</Typography>
                <Typography varinat="body1">
                Dane osobowe przesłane do nas za pośrednictwem naszej strony internetowej będą wykorzystywane do celów określonych w niniejszej polityce lub na odpowiednich stronach witryny. Możemy wykorzystywać Twoje dane osobowe do celu:
                <ul>
                <li>administrowania naszą stroną internetową i biznesem;</li>
                <li>personalizowania naszej strony internetowej dla Ciebie;</li>
                <li>umożliwienia korzystania z usług dostępnych na naszej stronie internetowej;</li>
                <li>wysyłania towarów zakupionych za pośrednictwem naszej strony internetowej;</li>
                <li>świadczenia usług zakupionych za pośrednictwem naszej strony internetowej;</li>
                <li>wysyłania do ciebie wyciągów, faktur i przypomnień o płatnościach oraz odbioru płatności od Ciebie;</li>
                <li>przesyłania niemarketingowej komunikacji handlowej;</li>
                <li>wysyłania powiadomień e-mail, o które prosiłeś;</li>
                <li>wysyłania naszego newslettera e-mail, jeśli o to poprosiłeś (możesz nas w każdej chwili poinformować, jeśli nie chcesz już otrzymywać newslettera);</li>
                <li>przesyłania informacji marketingowych dotyczących naszej działalności lub aktywności starannie wybranych stron trzecich, które naszym zdaniem mogą Cię zainteresować, pocztą lub, jeśli wyraziłeś na to zgodę, pocztą elektroniczną lub podobną technologią (możesz nas o tym poinformować w dowolnym momencie, jeśli nie chcesz już otrzymywać komunikatów marketingowych);</li>
                <li>dostarczania stronom trzecim informacji statystycznych o naszych użytkownikach (ale te osoby trzecie nie będą w stanie zidentyfikować żadnego konkretnego użytkownika na podstawie tych informacji);</li>
                <li>zajmowania się zapytaniami i skargami składanymi przez Ciebie lub dotyczącymi Ciebie w związku z naszą witryną;</li>
                <li>zapewnienia bezpieczeństwa naszej strony internetowej i zapobieganie oszustwom;</li>
                <li>weryfikacji zgodności z warunkami korzystania z naszej strony internetowej (w tym monitorowanie prywatnych wiadomości wysyłanych za pośrednictwem naszej prywatnej usługi przesyłania wiadomości);</li>
                <li>innych zastosowań.</li>
                </ul>
                Jeśli prześlesz dane osobowe do publikacji w naszej witrynie, opublikujemy je i wykorzystamy w inny sposób zgodnie z udzieloną nam licencją.

                Twoje ustawienia prywatności mogą być wykorzystane do ograniczenia publikacji Twoich informacji na naszej stronie internetowej i mogą być dostosowane za pomocą kontroli prywatności na stronie.

                Nie będziemy bez Twojej wyraźnej zgody przekazywać danych osobowych stronom trzecim, lub jakimkolwiek innym związanym z nimi stronom trzecim, w celach marketingu bezpośredniego.
                <br/>
                </Typography>
                <br/>
                <Typography variant="h6">E. Ujawnianie danych osobowych</Typography>
                <Typography varinat="body1">
                Możemy ujawniać dane osobowe użytkownika wszelkim naszym pracownikom, członkom kadry kierowniczej, przedstawicielom, dostawcom lub podwykonawcom, o ile jest to niezbędne do celów określonych w niniejszych „Zasadach ochrony prywatności”.

                Możemy ujawniać dane osobowe wszelkim członkom naszej grupy spółek (tzn. spółkom zależnym, głównej spółce holdingowej i jej spółkom zależnym), o ile jest to niezbędne do celów określonych w niniejszych „Zasadach ochrony prywatności”.

                Możemy ujawniać Twoje dane osobowe:
                <ul>
                <li>w zakresie, w jakim jest to wymagane przepisami prawa;</li>
                <li>w związku z trwającymi lub potencjalnymi postępowaniami prawnymi;</li>
                <li>w celu ustanowienia, wyegzekwowania lub obrony naszych praw (wliczając w to udostępnienie informacji innym podmiotom w celu przeciwdziałania oszustwom);</li>
                <li>nabywcy (lub potencjalnemu nabywcy) jakiejkolwiek działalności lub aktywów, które sprzedajemy (lub rozważamy);</li>
                <li>wszelkim osobom, które wedle naszej zasadnej opinii mogą wystąpić do sądu lub innego właściwego organu o ujawnienie takich danych osobowych, jeśli wedle zasadnej rozsądnej opinii, istnieje duże prawdopodobieństwo, że taki sąd lub organ nakaże ujawnienie takich danych osobowych</li>
                </ul>
                Z wyjątkiem postanowień zawartych w niniejszych „Zasadach ochrony prywatności” nie będziemy udostępniać osobom trzecim informacji dotyczących użytkownika.
                <br/>
                </Typography>
                <br/>
                <Typography variant="h6">F. Międzynarodowe transfery danych</Typography>
                <Typography varinat="body1">
                Informacje, które gromadzimy mogą być przechowywane i przetwarzane w każdym z krajów, w którym prowadzimy działalność i mogą być przesyłane pomiędzy tymi krajami w celu umożliwienia wykorzystania informacji zgodnie z niniejszymi „Zasadami ochrony prywatności”.
                Informacje, które zbieramy, mogą być przekazywane do następujących krajów, które nie mają przepisów o ochronie danych równoważnych z obowiązującymi w Europejskim Obszarze Gospodarczym: Stanów Zjednoczonych Ameryki, Rosji, Japonii, Chin i Indii.
                Dane osobowe, które publikujesz na naszej stronie internetowej lub przesyłasz do publikacji na naszej stronie internetowej, mogą być dostępne za pośrednictwem Internetu na całym świecie. Nie możemy zapobiec wykorzystywaniu lub niewłaściwemu wykorzystaniu takich informacji przez inne osoby.
                Wyraźnie zgadzasz się na przekazywanie danych osobowych opisanych w tej sekcji F.
                <br/>
                </Typography>
                <br/>
                <Typography variant="h6">G. Zachowywanie danych osobowych</Typography>
                <Typography varinat="body1">
                W Niniejszej Sekcji G określiliśmy nasze zasady i procedury dotyczące zatrzymywania danych, które mają na celu zapewnienie przestrzegania naszych zobowiązań prawnych w zakresie zachowywania i usuwania danych osobowych.
                Dane osobowe, które przetwarzamy w dowolnym celu lub celach, nie będą przechowywane dłużej niż jest to konieczne do tego celu lub tych celów.
                Bez uszczerbku dla artykułu G-2 zazwyczaj usuwamy dane osobowe należące do kategorii określonych poniżej w dniu/godzinie określonej poniżej:
                typ danych osobowych zostanie usunięty
                Niezależnie od innych postanowień niniejszej sekcji G zachowamy dokumenty (w tym dokumenty elektroniczne) zawierające dane osobowe:
                w zakresie, w jakim jest to wymagane przepisami prawa;
                jeśli uważamy, że dokumenty mogą mieć znaczenie dla wszelkich toczących się lub przyszłych postępowań sądowych; i
                w celu ustanowienia, wyegzekwowania lub obrony naszych praw (wliczając w to udostępnienie informacji innym podmiotom w celu przeciwdziałania oszustwom).
                <br/>
                </Typography>
                <br/>
                <Typography variant="h6">H. Bezpieczeństwo danych osobowych</Typography>
                <Typography varinat="body1">
                Podejmiemy zasadne techniczne i organizacyjne środki ostrożności w celu przeciwdziałania utracie, nadużyciu lub zmianie danych osobowych użytkownika.
                Będziemy przechowywać wszystkie dane osobowe, które podasz na naszych bezpiecznych serwerach (chronionych hasłem i zaporą).
                Wszystkie elektroniczne transakcje finansowe zawierane za pośrednictwem naszej strony internetowej będą chronione technologią szyfrowania.
                Użytkownik przyjmuje do wiadomości, że transmisja informacji przez Internet jest potencjalnie niebezpieczna i bezpieczeństwo przesłanych w ten sposób danych nie jest gwarantowane.
                Jesteś odpowiedzialny za zachowanie poufności hasła używanego do uzyskania dostępu do naszej strony internetowej; nie poprosimy Cię o podanie hasła (z wyjątkiem sytuacji, gdy logujesz się na naszej stronie internetowej).
                <br/>
                </Typography>
                <br/>
                <Typography variant="h6">I. Nowelizacje</Typography>
                <Typography varinat="body1">
                Niniejsze zasady mogą być okresowo aktualizowane poprzez zamieszczenie w naszej witrynie ich nowej wersji. Należy od czasu do czasu sprawdzać tę stronę, aby upewnić się, że rozumiesz wszelkie zmiany w tych zasadach. Możemy powiadomić Cię o zmianach w niniejszej polityce za pośrednictwem poczty elektronicznej lub prywatnego systemu przesyłania wiadomości na naszej stronie internetowej.
                <br/>
                </Typography>
                <br/>
                <Typography variant="h6">J. Twoje prawa</Typography>
                <Typography varinat="body1">
                Użytkownik może zażądać udostępnienia jego danych osobowych, które są przechowywane. Udostępnienie takich danych wiąże się z:

                uiszczeniem opłaty  i
                dostarczenie odpowiedniego dowodu tożsamości ().
                Możemy na Twoje żądanie ukrywać dane osobowe, w zakresie dozwolonym przez prawo.

                Możesz w dowolnym momencie poinstruować nas, aby nie przetwarzać danych osobowych w celach marketingowych.

                W praktyce zazwyczaj albo z góry wyraźnie wyrażasz zgodę na wykorzystanie przez nas Twoich danych osobowych w celach marketingowych, albo zapewnimy Ci możliwość rezygnacji z udostępniania Twoich danych osobowych w celach marketingowych.
                <br/>
                </Typography>
                <br/>
                <Typography variant="h6">K. Strony Internetowe osób trzecich</Typography>
                <Typography varinat="body1">
                Nasza strona internetowa zawiera hiperłącza do stron internetowych osób trzecich oraz szczegółowe informacje na ich temat. Nie mamy kontroli i nie ponosimy odpowiedzialności za politykę prywatności i praktyki osób trzecich.
                <br/>
                </Typography>
                <br/>
                <Typography variant="h6">L. Aktualizacja informacji</Typography>
                <Typography varinat="body1">
                Prosimy o informację w przypadku konieczności skorygowania lub aktualizowania danych osobowych, w których posiadaniu jesteśmy.
                <br/>
                </Typography>
                <br/>
                <Typography variant="h6">M. Ciasteczka</Typography>
                <Typography varinat="body1">
                Nasza strona internetowa korzysta z plików cookie. Plik cookie to plik zawierający identyfikator (ciąg liter i cyfr), który jest wysyłany przez serwer internetowy do przeglądarki internetowej i przechowywany przez przeglądarkę. Dane identyfikacyjne są ponownie przesyłane na serwer za każdym razem, gdy przeglądarka wyśle żądanie otwarcia strony znajdującej się na serwerze. Pliki cookie mogą być „trwałymi” lub „sesyjnymi” plikami cookie: trwałe pliki cookie będą przechowywane przez przeglądarkę internetową i pozostaną ważne do ustalonej daty wygaśnięcia, chyba że użytkownik usunie je przed datą wygaśnięcia; sesyjny plik cookie wygasa z końcem sesji użytkownika, gdy przeglądarka internetowa jest zamykana. Pliki cookie zazwyczaj nie zawierają żadnych informacji identyfikujących użytkownika, ale dane osobowe, które przechowujemy na Twój temat, mogą być powiązane z informacjami przechowywanymi w plikach cookie i uzyskiwanymi z nich. 

                Nazwy plików cookie, których używamy na naszej stronie internetowej, oraz cele, w których są wykorzystywane, są określone poniżej:
                używamy Google Analytics i Adwords na naszej stronie internetowej, aby rozpoznać komputer, gdy użytkownik ;
                Większość przeglądarek pozwala odmówić przyjęcia plików cookie — na przykład:
                <ul>
                <li>w przeglądarce Internet Explorer (wersja 10) można blokować pliki cookie, korzystając z dostępnych ustawień zastępowania obsługi plików cookie, klikając „Narzędzia”, „Opcje internetowe”, „Prywatność”, a następnie „Zaawansowane”;</li>
                <li>w przeglądarce Firefox (wersja 24) możesz zablokować wszystkie pliki cookie, klikając „Narzędzia”, „Opcje”, „Prywatność”, wybierając „Użyj ustawień niestandardowych dla historii” z menu rozwijanego i odznaczając „Akceptuj ciasteczka z witryn”;</li>
                <li>w Chrome (wersja 29) możesz zablokować wszystkie pliki cookie, otwierając menu „Dostosuj i kontroluj”, klikając „Ustawienia”, „Pokaż ustawienia zaawansowane” i „Ustawienia treści”, a następnie wybierając „Blokuj witrynom ustawianie dowolnych danych” pod nagłówkiem „Pliki cookie”.</li>
                </ul>
                Zablokowanie wszystkich plików cookie będzie miało negatywny wpływ na możliwość korzystania z wielu stron internetowych. Jeśli zablokujesz pliki cookie, nie będziesz mógł korzystać z wszystkich funkcji naszej strony.

                Możesz usunąć pliki cookie już zapisane na komputerze — na przykład:
                <ul>
                <li>w przeglądarce Internet Explorer (wersja 10) należy ręcznie usunąć pliki cookie (instrukcje można znaleźć na stronie http://support.microsoft.com/kb/278835 );</li>
                <li>w przeglądarce Firefox (wersja 24) możesz usunąć pliki cookie, klikając „Narzędzia”, „Opcje” i „Prywatność”, a następnie wybierając „Użyj ustawień niestandardowych dla historii”, klikając „Pokaż pliki cookie”, a następnie klikając „Usuń wszystkie pliki cookie”;</li>
                <li>w przeglądarce Chrome (wersja 29) można usunąć wszystkie pliki cookie, otwierając menu „Dostosuj i kontroluj”, klikając „Ustawienia”, „Pokaż ustawienia zaawansowane” i „Wyczyść dane przeglądarki”, a następnie wybierając „Usuń pliki cookie i dane innych stron i wtyczek” przed kliknięciem „Wyczyść dane
                przeglądania”.</li>
                </ul>
                Usunięcie plików cookie będzie miało negatywny wpływ na użyteczność wielu stron internetowych.
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