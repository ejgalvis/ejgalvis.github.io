document.addEventListener('DOMContentLoaded', () => {
    var instruments = document.getElementsByClassName('instrument');
    const instrumentObject = new Object();

    for(element of instruments) {
      // Create properties like "instrument1: 'Drum'"
      instrumentObject[element.nextElementSibling.id] = element.innerHTML
    }
    for (const property in instrumentObject){
        document.getElementById(property).addEventListener('click', () => {
          playInstrument(instrumentObject[property]);
        })
      }

      for (const property in instrumentObject){
        document.getElementById(property).addEventListener('mouseover', mouseOverHandler)
        document.getElementById(property).addEventListener('mouseout', mouseOutHandler)
      }
      
      function mouseOverHandler() {
        this.style.border = '3px solid red';
      }
      function mouseOutHandler() {
        this.style.border = '0px';
      }
    });

function playInstrument(instrumentSound) {
  var sound = new Howl({
    src: [`https://ejgalvis.github.io/Technical_Presentations/Week_5/audio/${instrumentSound}.mp3`, `https://ejgalvis.github.io/Technical_Presentations/Week_5/audio/audio/${instrumentSound}.webm`],
    sprite: {
      drum: [0, 3000],
      guitar: [0, 3000],
      organ: [0, 3000],
      human: [0, 3000],
    }
  });
  sound.play(instrumentSound);
}