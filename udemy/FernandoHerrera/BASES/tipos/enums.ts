(() => {
  enum AudioLevel {
    min,
    medium,
    max,
  }

  let currentAudio: AudioLevel = AudioLevel.medium;
  console.log(currentAudio);
  console.log(AudioLevel);

  enum canales {
    rctv = 2,
    Venevison = 4,
    tve, //tomara el valos siguiente automaticamente, en este caso 5
    Televen = 10,
  }
})();
