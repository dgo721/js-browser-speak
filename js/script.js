let buttons = document.querySelectorAll(".card .button");

const chooseLang = (lang) => {
  let language;

  switch (lang) {
    case "en":
      language = "en-US";
      break;
    case "es":
      language = "es-US";
      break;
    case "fr":
      language = "fr-FR";
      break;
    default:
      language = "en-US";
  }

  return language;
};

const speak = async (val) => {
  let text = document.querySelector("#text" + val).innerText;
  text = text === "" ? document.querySelector("#text" + val).alt : text;
  const message = new SpeechSynthesisUtterance(text);

  message.lang = await chooseLang(document.documentElement.lang);
  speechSynthesis.speak(message);
};

for (var i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  button.addEventListener("click", function (e) {
    e.preventDefault();
    speak(this.value);
  });
}
