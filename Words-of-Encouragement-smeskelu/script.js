// This function "renders" some bit of text
// as audio to the user.
function renderTTS(text) {
  var synthesis = window.speechSynthesis;

  console.log("Available Voices:");
  var voice = synthesis.getVoices().filter(function (voice) {
    console.log(voice.name + " " + voice.lang);
    return voice.name === 'Google UK English Female';
  })[0];

  // Create an utterance object
  var utterance = new SpeechSynthesisUtterance(text);

  // Set utterance properties
  utterance.voice = voice;
  utterance.pitch = 1;
  utterance.rate = 1;
  utterance.volume = 1;

  // Speak the utterance
  synthesis.speak(utterance);
}

function encourage(){
  let name = document.getElementById("name").value;
  let postScript = document.getElementById("post-script").value;
  let message = `Greetings ${postScript}, Today is a wonderful day. ${postScript} Have a wonderful day.`;
  let encouragement = document.getElementById("encouragement").value;
  let message2 = `Hello ${name}, I have something I would like to tell you. ${encouragement} Have a nice day.`;
   
  renderTTS(message);
}
// Below is the code that I have tried, but failed due to the console that displays an error message of there is another variable being declared
function postScript (){
  let postScript = document.getElementById("post-script").value;
  let encouragement = document.getElementById("encouragement").value;
  let message = `Greetings ${name}, Today is wonderful day and cheer up by brightening your smiles. ${encouragement} Have a wonderful day. ${postScript}`;

  renderTTS(message);
  
}

