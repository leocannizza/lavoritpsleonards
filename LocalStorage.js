// Prende il campo nome dall'HTML tramite l'id
const inputNome = document.getElementById("name");

// Prende il campo cognome
const inputCognome = document.getElementById("surname");

// Prende il campo data di nascita
const inputData = document.getElementById("DOB");

// Prende il campo indirizzo
const inputIndirizzo = document.getElementById("address");

// Prende il campo città
const inputCitta = document.getElementById("city");

// Prende il campo CAP
const inputCap = document.getElementById("postal-code");

// Prende il menu a tendina della provincia
const inputProvincia = document.getElementById("prov");

// Prende tutti i radio button del sesso
const inputSesso = document.getElementsByName("sesso");

// Prende tutte le checkbox dei mezzi di trasporto
const inputMezzi = document.getElementsByName("locomozione");

// Prende il menu delle materie
const selectMaterie = document.getElementById("materie");

// Prende il campo username
const inputUsername = document.getElementById("username");

// Prende il campo email
const inputEmail = document.getElementById("mail");


// ---- OUTPUT (dove verranno stampati i dati) ----

// Paragrafo dove verrà stampato il nome
const outNome = document.getElementById("nameO");

// Paragrafo per il cognome
const outCognome = document.getElementById("surnameO");

// Paragrafo per indirizzo
const outIndirizzo = document.getElementById("addressO");

// Paragrafo per username
const outUsername = document.getElementById("usernameO");

// Paragrafo per email
const outMail = document.getElementById("mailO");

// Paragrafo per città
const outCitta = document.getElementById("cityO");

// Paragrafo per CAP
const outCap = document.getElementById("postal-codeO");

// Paragrafo per data di nascita
const outData = document.getElementById("DOBO");

// Paragrafo per sesso
const outSesso = document.getElementById("sessoO");

// Paragrafo per provincia
const outProvincia = document.getElementById("provO");

// Paragrafo per mezzi di trasporto
const outMezzi = document.getElementById("locomozioneO");

// Paragrafo per materie preferite
const outMaterie = document.getElementById("materieO");


// Oggetto che contiene le generazioni con gli anni
const generazioni = {

    // Generazione Baby Boomers
    "Boomers": {start:1946, end:1964},

    // Generazione X
    "Gen X": {start:1965, end:1980},

    // Millennials
    "Millennials": {start:1981, end:1996},

    // Generazione Z
    "Gen Z": {start:1997, end:2012},

    // Generazione Alpha
    "Gen Alpha": {start:2013, end:2025}
};


// Funzione che viene eseguita quando si preme il bottone
function creaAnagrafica(){

// Legge il valore scritto nel campo nome
let nome = inputNome.value;

// Legge il cognome
let cognome = inputCognome.value;

// Legge indirizzo
let indirizzo = inputIndirizzo.value;

// Legge username
let username = inputUsername.value;

// Legge email
let email = inputEmail.value;

// Legge città
let citta = inputCitta.value;

// Legge CAP
let cap = inputCap.value;

// Converte la data inserita in un oggetto data
let data = new Date(inputData.value);


// REGEX per controllare che il nome abbia solo lettere
const regexNome = /^[A-Za-z]+$/;

// REGEX per controllare che il CAP abbia 5 numeri
const regexCap = /^[0-9]{5}$/;

// REGEX per username con lettere numeri e underscore
const regexUser = /^[a-zA-Z0-9_]{3,16}$/;

// REGEX per controllare formato email
const regexMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


// Se il nome non rispetta la regex
if(!regexNome.test(nome)){

// mostra un messaggio di errore
alert("Nome non valido");

// interrompe la funzione
return;
}


// Controlla il cognome
if(!regexNome.test(cognome)){

alert("Cognome non valido");

return;
}


// Controlla il CAP
if(!regexCap.test(cap)){

alert("CAP non valido");

return;
}


// Controlla lo username
if(!regexUser.test(username)){

alert("Username non valido");

return;
}


// Controlla email
if(!regexMail.test(email)){

alert("Email non valida");

return;
}


// Prende l'anno della data di nascita
let anno = data.getFullYear();

// Variabile che conterrà la generazione
let generazione = "Sconosciuta";


// Ciclo che controlla tutte le generazioni
for(let g in generazioni){

// Se l'anno rientra tra start e end
if(anno >= generazioni[g].start && anno <= generazioni[g].end){

// assegna la generazione
generazione = g;
}
}


// Variabile per il sesso
let sesso = "Non specificato";


// Ciclo su tutti i radio button
for(let s of inputSesso){

// Se il radio è selezionato
if(s.checked){

// prende il valore
sesso = s.value;
}
}


// Array per salvare i mezzi
let mezzi = [];


// Controlla tutte le checkbox
for(let m of inputMezzi){

// Se la checkbox è selezionata
if(m.checked){

// aggiunge il mezzo all'array
mezzi.push(m.value);
}
}


// Array per le materie
let materie = [];


// Ciclo sulle opzioni selezionate
for(let op of selectMaterie.selectedOptions){

// aggiunge la materia
materie.push(op.value);
}


// Oggetto che rappresenta la persona
let persona = {

// nome
nome,

// cognome
cognome,

// indirizzo
indirizzo,

// username
username,

// email
email,

// città
citta,

// CAP
cap,

// data formattata
data: data.toLocaleDateString(),

// generazione
generazione,

// provincia
provincia: inputProvincia.value,

// sesso
sesso,

// mezzi
mezzi,

// materie
materie
};


// stampa l'oggetto nella console
console.log(persona);


// Scrive il nome nell'anagrafica
outNome.textContent = persona.nome;

// Scrive cognome
outCognome.textContent = persona.cognome;

// Scrive indirizzo
outIndirizzo.textContent = persona.indirizzo;

// Scrive username
outUsername.textContent = persona.username;

// Scrive email
outMail.textContent = persona.email;

// Scrive città
outCitta.textContent = persona.citta;

// Scrive CAP
outCap.textContent = persona.cap;

// Scrive data e generazione
outData.textContent = persona.data + " (" + persona.generazione + ")";

// Scrive sesso
outSesso.textContent = persona.sesso;

// Scrive provincia
outProvincia.textContent = persona.provincia;

// Scrive i mezzi separati da virgola
outMezzi.textContent = persona.mezzi.join(", ");

// Scrive le materie
outMaterie.textContent = persona.materie.join(", ");

}
