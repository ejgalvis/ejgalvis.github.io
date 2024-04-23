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
    src: [`audio/${instrumentSound}.mp3`, `audio/${instrumentSound}.webm`],
    sprite: {
      Drum: [0, 3000],
      Guitar: [0, 3000],
      Organ: [0, 3000],
      Human: [0, 3000],
    }
  });
  sound.play(instrumentSound);
}