const inputNome = document.getElementById("name");
const inputCognome = document.getElementById("surname");
const inputData = document.getElementById("DOB");
const inputIndirizzo = document.getElementById("address");
const inputCitta = document.getElementById("city");
const inputCap = document.getElementById("postal-code");
const inputProvincia = document.getElementById("prov");
const inputSesso = document.getElementsByName("sesso");
const inputMezzi = document.getElementsByName("locomozione");
const selectMaterie = document.getElementById("materie");
const inputUsername = document.getElementById("username");
const inputEmail = document.getElementById("mail");

const outNome = document.getElementById("nameO");
const outCognome = document.getElementById("surnameO");
const outIndirizzo = document.getElementById("addressO");
const outUsername = document.getElementById("usernameO");
const outMail = document.getElementById("mailO");
const outCitta = document.getElementById("cityO");
const outCap = document.getElementById("postal-codeO");
const outData = document.getElementById("DOBO");
const outSesso = document.getElementById("sessoO");
const outProvincia = document.getElementById("provO");
const outMezzi = document.getElementById("locomozioneO");
const outMaterie = document.getElementById("materieO");

const generazioni = {
    "Boomers": {start:1946, end:1964},
    "Gen X": {start:1965, end:1980},
    "Millennials": {start:1981, end:1996},
    "Gen Z": {start:1997, end:2012},
    "Gen Alpha": {start:2013, end:2025}
};

function creaAnagrafica(){

let nome = inputNome.value;
let cognome = inputCognome.value;
let indirizzo = inputIndirizzo.value;
let username = inputUsername.value;
let email = inputEmail.value;
let citta = inputCitta.value;
let cap = inputCap.value;
let data = new Date(inputData.value);

const regexNome = /^[A-Za-z]+$/;
const regexCap = /^[0-9]{5}$/;
const regexUser = /^[a-zA-Z0-9_]{3,16}$/;
const regexMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!regexNome.test(nome)){
alert("Nome non valido");
return;
}

if(!regexNome.test(cognome)){
alert("Cognome non valido");
return;
}

if(!regexCap.test(cap)){
alert("CAP non valido");
return;
}

if(!regexUser.test(username)){
alert("Username non valido");
return;
}

if(!regexMail.test(email)){
alert("Email non valida");
return;
}

let anno = data.getFullYear();
let generazione = "Sconosciuta";

for(let g in generazioni){
if(anno >= generazioni[g].start && anno <= generazioni[g].end){
generazione = g;
}
}

let sesso = "Non specificato";

for(let s of inputSesso){
if(s.checked){
sesso = s.value;
}
}

let mezzi = [];

for(let m of inputMezzi){
if(m.checked){
mezzi.push(m.value);
}
}

let materie = [];

for(let op of selectMaterie.selectedOptions){
materie.push(op.value);
}

let persona = {
nome,
cognome,
indirizzo,
username,
email,
citta,
cap,
data: data.toLocaleDateString(),
generazione,
provincia: inputProvincia.value,
sesso,
mezzi,
materie
};

console.log(persona);

outNome.textContent = persona.nome;
outCognome.textContent = persona.cognome;
outIndirizzo.textContent = persona.indirizzo;
outUsername.textContent = persona.username;
outMail.textContent = persona.email;
outCitta.textContent = persona.citta;
outCap.textContent = persona.cap;
outData.textContent = persona.data + " (" + persona.generazione + ")";
outSesso.textContent = persona.sesso;
outProvincia.textContent = persona.provincia;
outMezzi.textContent = persona.mezzi.join(", ");
outMaterie.textContent = persona.materie.join(", ");

}
