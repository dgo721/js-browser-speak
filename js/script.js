let speakButtons = document.querySelectorAll(".card .js-btn--speak");
let stopButtons = document.querySelectorAll(".card .js-btn--stop");

const chooseLang = (lang) => {
  let language;

  switch (lang) {
    case "en":
      language = "en-GB";
      break;
    case "es":
      language = "es-US";
      break;
    case "fr":
      language = "fr-FR";
      break;
    case "ja":
      language = "ja-JP";
      break;
    default:
      language = "en-US";
  }

  return language;
};

const speak = async (val) => {
	if (speechSynthesis.speaking) return;
  let text = document.querySelector("#text" + val).innerText;
  text = text === "" ? document.querySelector("#text" + val).alt : text;
  const message = new SpeechSynthesisUtterance(text);

  message.lang = await chooseLang(document.documentElement.lang);
  speechSynthesis.speak(message);
};

for (var i = 0; i < speakButtons.length; i++) {
  let button = speakButtons[i];
  button.addEventListener("click", function (e) {
    e.preventDefault();
    speak(this.value);
  });
}

for (var i = 0; i < stopButtons.length; i++) {
  let button = stopButtons[i];
  button.addEventListener("click", function (e) {
    e.preventDefault();
    if (speechSynthesis.speaking) speechSynthesis.cancel();
  });
}