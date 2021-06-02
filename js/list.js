const getVoices = () => {
  return new Promise(resolve => {
    let voices = speechSynthesis.getVoices();
    if (voices.length) {
      resolve(voices);
      return;
    }
    speechSynthesis.onvoiceschanged = () => {
      voices = speechSynthesis.getVoices();
      resolve(voices);
    }
  })
};

const printVoicesList = async () => {
  ;(await getVoices()).forEach(voice => {
		console.log(voice.name, voice.lang);
		const li = document.createElement('li');
		li.appendChild(document.createTextNode(`${voice.name} - ${voice.lang}`));
		document.querySelector('ul').appendChild(li);
  })
};

printVoicesList();
